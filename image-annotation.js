
(function () {
  const Field = Formio.Components.components.field;

  class ImageAnnotationComponent extends Field {

    static schema(...extend) {
      return Field.schema({
        type: 'imageAnnotation',
        label: 'Image Annotation',
        key: 'imageAnnotation',
        input: true,
        persistent: true,
        imageUrl: '',
        ...extend
      });
    }

    static get builderInfo() {
      return {
        title: 'Image Annotation',
        icon: 'picture-o',
        group: 'basic',
        weight: 10,
        schema: ImageAnnotationComponent.schema()
      };
    }

    render() {
      return super.render(`
        <div class="image-annotation-component">
          <img
            ref="image"
            src="${this.component.imageUrl}"
            style="max-width:100%; display:block;"
          />
        </div>
      `);
    }
  }

  Formio.Components.addComponent(
    'imageAnnotation',
    ImageAnnotationComponent
  );
})();

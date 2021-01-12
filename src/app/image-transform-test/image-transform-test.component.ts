import { Component, OnInit } from '@angular/core';

declare const FilerobotImageEditor: any;
@Component({
  selector: 'app-image-transform-test',
  templateUrl: './image-transform-test.component.html',
  styleUrls: ['./image-transform-test.component.scss']
})
export class ImageTransformTestComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    const configProp = {
      translations: {
        da: {
          'header.image_editor_title': 'Filerobot Image Editor',
          'header.toggle_fullscreen': 'Toggle fullscreen',
          'header.close': 'Close',
          'header.close_modal': 'Close window',
          'toolbar.download': 'Download',
          'toolbar.save': 'Save',
          'toolbar.apply': 'Ansoge',
          'toolbar.cancel': 'Cancel',
          'toolbar.go_back': 'Go Back',
          'toolbar.adjust': 'Adjust',
          'toolbar.effects': 'Effects',
          'toolbar.filters': 'Filters',
          'toolbar.orientation': 'Orientation',
          'toolbar.crop': 'Crop',
          'toolbar.resize': 'Resize',
          'toolbar.watermark': 'Watermark',
          'toolbar.focus_point': 'Focus point',
          'toolbar.shapes': 'Shapes',
          'toolbar.image': 'Image',
          'toolbar.text': 'Text',
          'adjust.brightness': 'Brightness',
          'adjust.contrast': 'Contrast',
          'adjust.exposure': 'Exposure',
          'adjust.saturation': 'Saturation',
          'orientation.rotate_l': 'Rotate Left',
          'orientation.rotate_r': 'Rotate Right',
          'orientation.flip_h': 'Flip Horizontally',
          'orientation.flip_v': 'Flip Vertically',
          'pre_resize.title': 'Would you like to reduce resolution before editing the image?',
          'pre_resize.keep_original_resolution': 'Keep original resolution',
          'pre_resize.resize_n_continue': 'Resize & Continue',
          'footer.reset': 'Reset',
          'footer.undo': 'Undo',
          'footer.redo': 'Redo',
          'spinner.label': 'Processing...',
          'warning.too_big_resolution': 'The resolution of the image is too big for the web. It can cause problems with Image Editor performance.',
          'common.x': 'x',
          'common.y': 'y',
          'common.width': 'width',
          'common.height': 'height',
          'common.custom': 'custom',
          'common.original': 'original',
          'common.square': 'square',
          'common.opacity': 'Opacity',
          'common.apply_watermark': 'Apply watermark',
          'common.url': 'URL',
          'common.upload': 'Upload',
          'common.gallery': 'Gallery',
          'common.text': 'Text',
        }
      },
      language: 'da',
      theme: {
        colors: {
          primaryBg: '#1e262c',
          primaryBgHover: '#637381',
          secondaryBg: '#000000',
          secondaryBgHover: '#34444c',
          text: '#F9FAFB',
          textHover: '#fff',
          textMute: '#aaa',
          textWarn: '#f7931e',
          secondaryBgOpacity: 'rgba(0, 0, 0, 0.75)',

          border: '#161e23',
          borderLight: '#70777f'
        },
        fonts: [
          { label: 'Arial', value: 'Arial' },
          { label: 'Tahoma', value: 'Tahoma' },
          { label: 'Times New Roman', value: 'Times New Roman'},
          { label: 'Courier', value: 'Courier' },
          { label: 'Courier New', value: 'Courier New' },
          { label: 'Verdana', value: 'Verdana' }
        ]
      }
    };
    const callBackFunc = {
      onClose(status): void {
        console.log(status);
      }
    };
    const ImageEditor = new FilerobotImageEditor(configProp, callBackFunc);
    ImageEditor.open('https://scaleflex.airstore.io/demo/stephen-walker-unsplash.jpg');
  }

}

type TType = 'img' | 'text'
type TFontWeight = '500' | '600' | '700' | '800' | '900'

interface IUserComponent {
  type: TType
  src?: ImageData
  value?: string
  x?: number
  y?: number
  width?: number
  height?: number
  fontSize?: number
  fontWeight?: TFontWeight
  group?: number
}

export class UserComponent {
  public type: TType = 'text';
  public src: ImageData | null = null;
  public value: string | null = null;
  public x: number = 0;
  public y: number = 0;
  public width: number = 100;
  public height: number = 20;
  public fontSize: number = 20;
  public fontWeight: TFontWeight = '500';
  public group: number = 0;

  constructor(props: IUserComponent) {
    this.type = props.type;
    this.src = props.src || null;
    this.value = props.value || null;
    this.x = props.x || this.x;
    this.y = props.y || this.y;
    this.width = props.width || this.width;
    this.height = props.height || this.height;
    this.fontSize = props.fontSize || this.fontSize;
    this.fontWeight = props.fontWeight || this.fontWeight;
    this.group = props.group || this.group;
  }
}

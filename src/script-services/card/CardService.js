// classes
const Action = require('./classes/Action');
const ActionResponseBuilder = require('./classes/ActionResponseBuilder');
const AuthorizationAction = require('./classes/AuthorizationAction');
const ButtonSet = require('./classes/ButtonSet');
const CardAction = require('./classes/CardAction');
const CardBuilder = require('./classes/CardBuilder');
const CardHeader = require('./classes/CardHeader');
const CardSection = require('./classes/CardSection');
const ComposeActionResponseBuilder = require('./classes/ComposeActionResponseBuilder');
const Image = require('./classes/Image');
const ImageButton = require('./classes/ImageButton');
const KeyValue = require('./classes/KeyValue');
const Navigation = require('./classes/Navigation');
const Notification = require('./classes/Notification');
const OpenLink = require('./classes/OpenLink');
const SelectionInput = require('./classes/SelectionInput');
const Suggestions = require('./classes/Suggestions');
const TextButton = require('./classes/TextButton');
const TextInput = require('./classes/TextInput');
const TextParagraph = require('./classes/TextParagraph');
const UniversalActionResponseBuilder = require('./classes/UniversalActionResponseBuilder');
const UpdateDraftActionResponseBuilder = require('./classes/UpdateDraftActionResponseBuilder');
const UpdateDraftBodyAction = require('./classes/UpdateDraftBodyAction');

// enums
const ComposeEmailType = require('./enums/ComposeEmailType');
const ContentType = require('./enums/ContentType');
const Icon = require('./enums/Icon');
const ImageStyle = require('./enums/ImageStyle');
const LoadIndicator = require('./enums/LoadIndicator');
const NotificationType = require('./enums/NotificationType');
const OnClose = require('./enums/OnClose');
const OpenAs = require('./enums/OpenAs');
const SelectionInputType = require('./enums/SelectionInputType');
const TextButtonStyle = require('./enums/TextButtonStyle');
const UpdateDraftBodyType = require('./enums/UpdateDraftBodyType');

class CardService {
  static newAction() {
    return new Action();
  }

  static newActionResponseBuilder() {
    return new ActionResponseBuilder();
  }

  static newAuthorizationAction() {
    return new AuthorizationAction();
  }

  static newComposeActionResponseBuilder() {
    return new ComposeActionResponseBuilder();
  }

  static newUpdateDraftActionResponseBuilder() {
    return new UpdateDraftActionResponseBuilder();
  }

  static newUpdateDraftBodyAction() {
    return new UpdateDraftBodyAction();
  }

  static newButtonSet() {
    return new ButtonSet();
  }

  static newCardAction() {
    return new CardAction();
  }

  static newCardBuilder() {
    return new CardBuilder();
  }

  static newCardHeader() {
    return new CardHeader();
  }

  static newCardSection() {
    return new CardSection();
  }

  static newImage() {
    return new Image();
  }

  static newImageButton() {
    return new ImageButton();
  }

  static newKeyValue() {
    return new KeyValue();
  }

  static newNavigation() {
    return new Navigation();
  }

  static newNotification() {
    return new Notification();
  }

  static newOpenLink() {
    return new OpenLink();
  }

  static newSelectionInput() {
    return new SelectionInput();
  }

  static newSuggestions() {
    return new Suggestions();
  }

  static newTextButton() {
    return new TextButton();
  }

  static newTextInput() {
    return new TextInput();
  }

  static newTextParagraph() {
    return new TextParagraph();
  }

  static newUniversalActionResponseBuilder() {
    return new UniversalActionResponseBuilder();
  }

  static get ComposeEmailType() {
    return ComposeEmailType;
  }

  static get Icon() {
    return Icon;
  }

  static get ImageStyle() {
    return ImageStyle;
  }

  static get LoadIndicator() {
    return LoadIndicator;
  }

  static get NotificationType() {
    return NotificationType;
  }

  static get OnClose() {
    return OnClose;
  }

  static get OpenAs() {
    return OpenAs;
  }

  static get SelectionInputType() {
    return SelectionInputType;
  }

  static get TextButtonStyle() {
    return TextButtonStyle;
  }

  static get ContentType() {
    return ContentType;
  }

  static get UpdateDraftBodyType() {
    return UpdateDraftBodyType;
  }
}

module.exports = CardService;

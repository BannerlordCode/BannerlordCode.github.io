<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MaskedTextureWidget`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MaskedTextureWidget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class MaskedTextureWidget : TextureWidget`
**Base:** `TextureWidget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/MaskedTextureWidget.cs`

## 概述

`MaskedTextureWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `OverlayTextureScale` | `public float OverlayTextureScale { get; set; }` |
| `ImageId` | `public string ImageId { get { return this._imageId; }` |
| `AdditionalArgs` | `public string AdditionalArgs { get { return this._additionalArgs; }` |
| `IsBig` | `public bool IsBig { get { return this._isBig; }` |

## 主要方法

### OnClearTextureProvider
```csharp
public override void OnClearTextureProvider()
```

## 使用示例

```csharp
// MaskedTextureWidget (Widget) 的典型用法
// 声明/访问一个 MaskedTextureWidget
var widget = root.GetChild("maskedTextureWidget");;
```

## 参见

- [完整类目录](../catalog)
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TextureWidget`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TextureWidget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class TextureWidget : ImageWidget`
**Base:** `ImageWidget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/TextureWidget.cs`

## 概述

`TextureWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `LoadingIconWidget` | `public Widget LoadingIconWidget { get; set; }` |
| `SetForClearNextFrame` | `public bool SetForClearNextFrame { get; protected set; }` |
| `TextureProviderName` | `public string TextureProviderName { get { return this._textureProviderName; }` |
| `Texture` | `public Texture Texture { get { return this._texture; }` |

## 主要方法

### OnClearTextureProvider
```csharp
public virtual void OnClearTextureProvider()
```

## 使用示例

```csharp
// TextureWidget (Widget) 的典型用法
// 声明/访问一个 TextureWidget
var widget = root.GetChild("textureWidget");;
```

## 参见

- [完整类目录](../catalog)
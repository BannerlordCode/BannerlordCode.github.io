<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ImageIdentifierWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ImageIdentifierWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ImageIdentifierWidget : TextureWidget`
**Base:** `TextureWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/ImageIdentifierWidget.cs`

## 概述

`ImageIdentifierWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `ImageId` | `public string ImageId { get; set; }` |
| `AdditionalArgs` | `public string AdditionalArgs { get; set; }` |
| `IsBig` | `public bool IsBig { get; set; }` |
| `HideWhenNull` | `public bool HideWhenNull { get; set; }` |

## 主要方法

### OnClearTextureProvider
```csharp
public override void OnClearTextureProvider()
```

## 使用示例

```csharp
// ImageIdentifierWidget (Widget) 的典型用法
// 声明/访问一个 ImageIdentifierWidget
var widget = root.GetChild("imageIdentifierWidget");;
```

## 参见

- [完整类目录](../catalog)
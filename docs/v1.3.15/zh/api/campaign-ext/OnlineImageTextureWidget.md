<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `OnlineImageTextureWidget`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OnlineImageTextureWidget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class OnlineImageTextureWidget : TextureWidget`
**Base:** `TextureWidget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/OnlineImageTextureWidget.cs`

## 概述

`OnlineImageTextureWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `ImageSizePolicy` | `public OnlineImageTextureWidget.ImageSizePolicies ImageSizePolicy { get; set; }` |
| `OnlineImageSourceUrl` | `public string OnlineImageSourceUrl { get { return this._onlineImageSourceUrl; }` |

## 使用示例

```csharp
// OnlineImageTextureWidget (Widget) 的典型用法
// 声明/访问一个 OnlineImageTextureWidget
var widget = root.GetChild("onlineImageTextureWidget");;
```

## 参见

- [完整类目录](../catalog)
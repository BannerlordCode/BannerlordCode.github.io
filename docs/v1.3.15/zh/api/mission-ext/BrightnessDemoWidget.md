<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BrightnessDemoWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BrightnessDemoWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BrightnessDemoWidget : TextureWidget`
**Base:** `TextureWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/BrightnessDemoWidget.cs`

## 概述

`BrightnessDemoWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `DemoType` | `public BrightnessDemoWidget.DemoTypes DemoType { get; set; }` |

## 使用示例

```csharp
// BrightnessDemoWidget (Widget) 的典型用法
// 声明/访问一个 BrightnessDemoWidget
var widget = root.GetChild("brightnessDemoWidget");;
```

## 参见

- [完整类目录](../catalog)
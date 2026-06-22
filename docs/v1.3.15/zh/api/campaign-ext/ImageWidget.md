<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ImageWidget`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ImageWidget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class ImageWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/ImageWidget.cs`

## 概述

`ImageWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `OverrideDefaultStateSwitchingEnabled` | `public bool OverrideDefaultStateSwitchingEnabled { get; set; }` |
| `OverrideDefaultStateSwitchingDisabled` | `public bool OverrideDefaultStateSwitchingDisabled { get { return !this.OverrideDefaultStateSwitchingEnabled; }` |

## 使用示例

```csharp
// ImageWidget (Widget) 的典型用法
// 声明/访问一个 ImageWidget
var widget = root.GetChild("imageWidget");;
```

## 参见

- [完整类目录](../catalog)
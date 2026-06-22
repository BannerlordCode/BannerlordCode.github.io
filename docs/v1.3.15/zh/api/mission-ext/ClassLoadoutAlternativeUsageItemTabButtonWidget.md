<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ClassLoadoutAlternativeUsageItemTabButtonWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ClassLoadoutAlternativeUsageItemTabButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.ClassLoadout
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ClassLoadoutAlternativeUsageItemTabButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/ClassLoadout/ClassLoadoutAlternativeUsageItemTabButtonWidget.cs`

## 概述

`ClassLoadoutAlternativeUsageItemTabButtonWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `UsageType` | `public string UsageType { get; set; }` |
| `IconWidget` | `public BrushWidget IconWidget { get; set; }` |

## 使用示例

```csharp
// ClassLoadoutAlternativeUsageItemTabButtonWidget (Widget) 的典型用法
// 声明/访问一个 ClassLoadoutAlternativeUsageItemTabButtonWidget
var widget = root.GetChild("classLoadoutAlternativeUsageItemTabButtonWidget");;
```

## 参见

- [完整类目录](../catalog)
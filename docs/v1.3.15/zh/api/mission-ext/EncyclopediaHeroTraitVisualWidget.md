<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EncyclopediaHeroTraitVisualWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EncyclopediaHeroTraitVisualWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Encyclopedia
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class EncyclopediaHeroTraitVisualWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Encyclopedia/EncyclopediaHeroTraitVisualWidget.cs`

## 概述

`EncyclopediaHeroTraitVisualWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `TraitId` | `public string TraitId { get; set; }` |
| `TraitValue` | `public int TraitValue { get; set; }` |

## 使用示例

```csharp
// EncyclopediaHeroTraitVisualWidget (Widget) 的典型用法
// 声明/访问一个 EncyclopediaHeroTraitVisualWidget
var widget = root.GetChild("encyclopediaHeroTraitVisualWidget");;
```

## 参见

- [完整类目录](../catalog)
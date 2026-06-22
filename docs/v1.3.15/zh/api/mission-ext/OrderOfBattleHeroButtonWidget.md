<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `OrderOfBattleHeroButtonWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OrderOfBattleHeroButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.OrderOfBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderOfBattleHeroButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/OrderOfBattle/OrderOfBattleHeroButtonWidget.cs`

## 概述

`OrderOfBattleHeroButtonWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsMainHero` | `public bool IsMainHero { get; set; }` |
| `MainHeroHueFactor` | `public int MainHeroHueFactor { get; set; }` |
| `CanMainHeroAcceptEvents` | `public bool CanMainHeroAcceptEvents { get; set; }` |

## 使用示例

```csharp
// OrderOfBattleHeroButtonWidget (Widget) 的典型用法
// 声明/访问一个 OrderOfBattleHeroButtonWidget
var widget = root.GetChild("orderOfBattleHeroButtonWidget");;
```

## 参见

- [完整类目录](../catalog)
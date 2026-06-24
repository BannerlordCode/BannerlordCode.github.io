<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `HideoutModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# HideoutModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class HideoutModel : MBGameModel<HideoutModel>`
**Base:** `MBGameModel<HideoutModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/HideoutModel.cs`

## 概述

`HideoutModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `HideoutModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `HideoutHiddenDuration` | `public abstract CampaignTime HideoutHiddenDuration { get; }` |
| `CanAttackHideoutStartTime` | `public abstract int CanAttackHideoutStartTime { get; }` |
| `CanAttackHideoutEndTime` | `public abstract int CanAttackHideoutEndTime { get; }` |

## 主要方法

### GetRogueryXpGainAsGhost
`public abstract float GetRogueryXpGainAsGhost()`

**用途 / Purpose:** 获取 `roguery xp gain as ghost` 的当前值。

### GetRogueryXpGainOnHideoutMissionEnd
`public abstract float GetRogueryXpGainOnHideoutMissionEnd(bool isSucceeded)`

**用途 / Purpose:** 获取 `roguery xp gain on hideout mission end` 的当前值。

### GetSendTroopsSuccessChance
`public abstract float GetSendTroopsSuccessChance(Hideout hideout)`

**用途 / Purpose:** 获取 `send troops success chance` 的当前值。

## 使用示例

```csharp
var implementation = new CustomHideoutModel();
```

## 参见

- [完整类目录](../catalog)
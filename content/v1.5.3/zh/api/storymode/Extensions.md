---
title: "Extensions"
description: "StoryMode 命名空间下的 Settlement 扩展方法：两个入口回答「这个聚落是不是练武场」并把组件取出来。"
---
# Extensions

**Namespace:** StoryMode.Extensions
**Module:** StoryMode
**Type:** `public static class Extensions`
**Base:** `System.Object`（纯静态类）
**Source:** `bannerlord-1.5.3/StoryMode/Extensions/Extensions.cs`

## 概述

全类只有两个扩展方法，都是给 `Settlement` 用的：一个 `IsTrainingField()` 返回布尔判断，一个 `TrainingField()` 返回组件本体。它们存在的唯一理由是——`SettlementComponent` 在引擎里没有提供类型安全的向下转型入口，而「判断这个聚落挂的是不是某一种特定组件」是 mod 反复要写的代码。

## 心智模型

用法上有个必须记住的前提：**扩展方法不需要 using 就能编译进你的程序集，但需要 `using StoryMode.Extensions;` 才可见。** 少了这个 using，`settlement.IsTrainingField()` 会报「找不到扩展方法」——这是最常见的初学者困惑，而且错误信息不会提到命名空间。

两个方法的真实使用者只有两个模型：`StoryModeCombatXpModel` 和 `StoryModeGenericXpModel`。它们的形态一致：

```csharp
if (Settlement.CurrentSettlement != null && Settlement.CurrentSettlement.IsTrainingField())
{
    return new ExplainedNumber(0f, false, null);
}
```

也就是说**这个扩展方法的主要用途是「在练武场里不产生战斗/通用经验」**。

**注意第二个方法与类型同名**：扩展方法叫 `TrainingField()`，返回的类型也叫 `TrainingField`（在 `StoryMode` 命名空间）。C# 允许这个，但在这两个类型同时可见的文件里，`TrainingField` 这个标识符有时指类型、有时指方法。写 `TrainingField x = s.TrainingField();` 能编译（左边是类型上下文），但 `TrainingField.WaitMeshName` 这种就会指向类型——编译器按上下文解析，一般不出错，但**读代码时容易看晕**。

**坑**：

1. **`IsTrainingField()` 只判 `SettlementComponent is TrainingField`**。它**不检查聚落是否激活**、不检查玩家是否在里面。废弃或未初始化的练武场也会返回 true。
2. **`TrainingField()` 返回 null 的情形比想象中多**：不是练武场时返回 null；聚落存在但 `SettlementComponent` 为 null 时也返回 null。用之前必须判空。
3. **`SettlementComponent` 只有一个槽位**。一个聚落只能挂一种组件。别的模组给 `tutorial_training_field` 挂了不同类型的组件，`IsTrainingField()` 立刻变 false——**这两个方法互相干扰**，且没有报错。
4. **命名空间容易搞混**：`StoryMode.Extensions` 里有一个类就叫 `Extensions`。写 `using StoryMode.Extensions;` 之后，文件里所有扩展方法都可见，可能与别的扩展撞名。

## 主要成员

- `public static bool IsTrainingField(this Settlement settlement)`：**恒不判空 `settlement`**——传 null 会在 `.SettlementComponent` 处 NRE。内部是 `settlement.SettlementComponent is TrainingField`。
- `public static TrainingField TrainingField(this Settlement settlement)`：同样**不判空 `settlement`**。内部是 `settlement.SettlementComponent as TrainingField`，不是练武场时返回 null。

本类**没有**其它字段、常量或属性。

## 使用示例

```csharp
using StoryMode.Extensions;   // 不写这一行，下面两个扩展方法都不可见

// 1) 战斗经验模型里排除练武场（StoryModeCombatXpModel 的真实形态）
public override ExplainedNumber GetXpFromHit(CharacterObject attackerTroop, CharacterObject captain,
    CharacterObject attackedTroop, PartyBase attackerParty, int damage, bool isFatal,
    CombatXpModel.MissionTypeEnum missionType)
{
    if (Settlement.CurrentSettlement != null && Settlement.CurrentSettlement.IsTrainingField())
    {
        return new ExplainedNumber(0f, false, null);
    }
    return base.BaseModel.GetXpFromHit(attackerTroop, captain, attackedTroop, attackerParty, damage, isFatal, missionType);
}

// 2) 取组件读它的网格配置（TrainingFieldCampaignBehavior 的真实形态）
[GameMenuInitializationHandler("training_field_menu")]
private static void OnMenuInit(MenuCallbackArgs args)
{
    TrainingField field = Settlement.Find("tutorial_training_field").TrainingField();
    if (field != null)
    {
        args.MenuContext.SetBackgroundMeshName(field.WaitMeshName);
    }
}

// 3) 安全版：先判聚落非空，再判是不是练武场
Settlement current = Settlement.CurrentSettlement;
if (current != null && current.IsTrainingField())
{
    TrainingField component = current.TrainingField();
    Debug.Print("背景网格：" + component.BackgroundMeshName);
}
```

## 风险与边界

- **`settlement` 不判空**：两个方法传 null 都 NRE。调用点自己负责。
- **组件槽位唯一且独占**：`SettlementComponent` 只能挂一种。别的 mod 改了 `tutorial_training_field` 的组件类型，这两个方法会一起变 false。这是**跨 mod 的静默破坏**。
- **不判聚落状态**：废弃/未激活的练武场也算 true。
- **方法名与类型名同名**：`TrainingField()` 方法和 `TrainingField` 类型共名。跨文件阅读时容易误判标识符含义。
- **必须显式 using**：`StoryMode.Extensions` 不在 `StoryMode` 里，少写 using 时编译器只报「找不到扩展方法」而不提命名空间。
- **不判组件是否已初始化**：`Deserialize` 没跑成功的组件，`BackgroundMeshName` / `WaitMeshName` 是 null 而不是空串。喂给 `SetBackgroundMeshName(null)` 之前先确认。

## 依赖关系

- [TrainingField](../TrainingField) — 被检出的组件类型，也是同名方法的返回类型
- [TrainingFieldEncounter](../TrainingFieldEncounter) — 同一处练武场的遭遇侧实现
- [CampaignStoryMode](../CampaignStoryMode) — 注册 `TrainingField` 组件类型的地方
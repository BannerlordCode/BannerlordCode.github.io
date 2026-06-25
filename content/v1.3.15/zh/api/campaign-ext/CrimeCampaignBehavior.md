---
title: "CrimeCampaignBehavior"
description: "CrimeCampaignBehavior 的自动生成类参考。"
---
# CrimeCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CrimeCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/CrimeCampaignBehavior.cs`

## 概述

`CrimeCampaignBehavior` 位于 `TaleWorlds.CampaignSystem.CampaignBehaviors`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.CampaignBehaviors` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### RegisterEvents
`public override void RegisterEvents()`

**用途 / Purpose:** 将「events」注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 CrimeCampaignBehavior 实例
CrimeCampaignBehavior crimeCampaignBehavior = ...;
crimeCampaignBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**用途 / Purpose:** 将「data」同步到相关上下文或系统中。

```csharp
// 先通过子系统 API 拿到 CrimeCampaignBehavior 实例
CrimeCampaignBehavior crimeCampaignBehavior = ...;
crimeCampaignBehavior.SyncData(dataStore);
```

### game_menu_town_criminal_on_init
`public static void game_menu_town_criminal_on_init(MenuCallbackArgs args)`

**用途 / Purpose:** 处理与 「game_menu_town_criminal_on_init」 相关的逻辑。

```csharp
// 静态调用，不需要实例
CrimeCampaignBehavior.game_menu_town_criminal_on_init(args);
```

### town_inside_criminal_on_init
`public static void town_inside_criminal_on_init(MenuCallbackArgs args)`

**用途 / Purpose:** 处理与 「town_inside_criminal_on_init」 相关的逻辑。

```csharp
// 静态调用，不需要实例
CrimeCampaignBehavior.town_inside_criminal_on_init(args);
```

### town_discuss_criminal_surrender_on_init
`public static void town_discuss_criminal_surrender_on_init(MenuCallbackArgs args)`

**用途 / Purpose:** 处理与 「town_discuss_criminal_surrender_on_init」 相关的逻辑。

```csharp
// 静态调用，不需要实例
CrimeCampaignBehavior.town_discuss_criminal_surrender_on_init(args);
```

### criminal_inside_menu_pay_by_punishment_on_condition
`public static bool criminal_inside_menu_pay_by_punishment_on_condition(MenuCallbackArgs args)`

**用途 / Purpose:** 获取或更新 「criminal_inside_menu_pay_by_punishment_on_condition」 的状态。

```csharp
// 静态调用，不需要实例
CrimeCampaignBehavior.criminal_inside_menu_pay_by_punishment_on_condition(args);
```

### criminal_inside_menu_pay_by_punishment_on_consequence
`public static void criminal_inside_menu_pay_by_punishment_on_consequence(MenuCallbackArgs args)`

**用途 / Purpose:** 处理与 「criminal_inside_menu_pay_by_punishment_on_consequence」 相关的逻辑。

```csharp
// 静态调用，不需要实例
CrimeCampaignBehavior.criminal_inside_menu_pay_by_punishment_on_consequence(args);
```

### criminal_inside_menu_give_money_on_condition
`public static bool criminal_inside_menu_give_money_on_condition(MenuCallbackArgs args)`

**用途 / Purpose:** 获取或更新 「criminal_inside_menu_give_money_on_condition」 的状态。

```csharp
// 静态调用，不需要实例
CrimeCampaignBehavior.criminal_inside_menu_give_money_on_condition(args);
```

### criminal_inside_menu_give_money_on_consequence
`public static void criminal_inside_menu_give_money_on_consequence(MenuCallbackArgs args)`

**用途 / Purpose:** 处理与 「criminal_inside_menu_give_money_on_consequence」 相关的逻辑。

```csharp
// 静态调用，不需要实例
CrimeCampaignBehavior.criminal_inside_menu_give_money_on_consequence(args);
```

### criminal_inside_menu_give_influence_on_condition
`public static bool criminal_inside_menu_give_influence_on_condition(MenuCallbackArgs args)`

**用途 / Purpose:** 获取或更新 「criminal_inside_menu_give_influence_on_condition」 的状态。

```csharp
// 静态调用，不需要实例
CrimeCampaignBehavior.criminal_inside_menu_give_influence_on_condition(args);
```

### criminal_inside_menu_give_influence_on_consequence
`public static void criminal_inside_menu_give_influence_on_consequence(MenuCallbackArgs args)`

**用途 / Purpose:** 处理与 「criminal_inside_menu_give_influence_on_consequence」 相关的逻辑。

```csharp
// 静态调用，不需要实例
CrimeCampaignBehavior.criminal_inside_menu_give_influence_on_consequence(args);
```

### criminal_inside_menu_give_punishment_and_money_on_condition
`public static bool criminal_inside_menu_give_punishment_and_money_on_condition(MenuCallbackArgs args)`

**用途 / Purpose:** 获取或更新 「criminal_inside_menu_give_punishment_and_money_on_condition」 的状态。

```csharp
// 静态调用，不需要实例
CrimeCampaignBehavior.criminal_inside_menu_give_punishment_and_money_on_condition(args);
```

### criminal_inside_menu_give_punishment_and_money_on_consequence
`public static void criminal_inside_menu_give_punishment_and_money_on_consequence(MenuCallbackArgs args)`

**用途 / Purpose:** 处理与 「criminal_inside_menu_give_punishment_and_money_on_consequence」 相关的逻辑。

```csharp
// 静态调用，不需要实例
CrimeCampaignBehavior.criminal_inside_menu_give_punishment_and_money_on_consequence(args);
```

### criminal_inside_menu_give_your_life_on_condition
`public static bool criminal_inside_menu_give_your_life_on_condition(MenuCallbackArgs args)`

**用途 / Purpose:** 获取或更新 「criminal_inside_menu_give_your_life_on_condition」 的状态。

```csharp
// 静态调用，不需要实例
CrimeCampaignBehavior.criminal_inside_menu_give_your_life_on_condition(args);
```

### criminal_inside_menu_give_your_life_on_consequence
`public static void criminal_inside_menu_give_your_life_on_consequence(MenuCallbackArgs args)`

**用途 / Purpose:** 处理与 「criminal_inside_menu_give_your_life_on_consequence」 相关的逻辑。

```csharp
// 静态调用，不需要实例
CrimeCampaignBehavior.criminal_inside_menu_give_your_life_on_consequence(args);
```

### criminal_inside_menu_ignore_charges_on_condition
`public static bool criminal_inside_menu_ignore_charges_on_condition(MenuCallbackArgs args)`

**用途 / Purpose:** 获取或更新 「criminal_inside_menu_ignore_charges_on_condition」 的状态。

```csharp
// 静态调用，不需要实例
CrimeCampaignBehavior.criminal_inside_menu_ignore_charges_on_condition(args);
```

### criminal_inside_menu_ignore_charges_on_consequence
`public static void criminal_inside_menu_ignore_charges_on_consequence(MenuCallbackArgs args)`

**用途 / Purpose:** 处理与 「criminal_inside_menu_ignore_charges_on_consequence」 相关的逻辑。

```csharp
// 静态调用，不需要实例
CrimeCampaignBehavior.criminal_inside_menu_ignore_charges_on_consequence(args);
```

### town_discuss_criminal_surrender_back_on_consequence
`public static void town_discuss_criminal_surrender_back_on_consequence(MenuCallbackArgs args)`

**用途 / Purpose:** 处理与 「town_discuss_criminal_surrender_back_on_consequence」 相关的逻辑。

```csharp
// 静态调用，不需要实例
CrimeCampaignBehavior.town_discuss_criminal_surrender_back_on_consequence(args);
```

### town_discuss_criminal_surrender_on_condition
`public static bool town_discuss_criminal_surrender_on_condition(MenuCallbackArgs args)`

**用途 / Purpose:** 获取或更新 「town_discuss_criminal_surrender_on_condition」 的状态。

```csharp
// 静态调用，不需要实例
CrimeCampaignBehavior.town_discuss_criminal_surrender_on_condition(args);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
CrimeCampaignBehavior crimeCampaignBehavior = ...;
crimeCampaignBehavior.RegisterEvents();
```

## 参见

- [本区域目录](../)
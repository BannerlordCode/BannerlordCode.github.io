---
title: "AgentOriginUtilities"
description: "AgentOriginUtilities 的自动生成类参考。"
---
# AgentOriginUtilities

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class AgentOriginUtilities`
**Base:** 无
**File:** `TaleWorlds.Core/AgentOriginUtilities.cs`

## 概述

`AgentOriginUtilities` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetDefaultTraitsMask
`public static TroopTraitsMask GetDefaultTraitsMask(IAgentOriginBase origin)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 default traits mask 的结果。

```csharp
// 静态调用，不需要实例
AgentOriginUtilities.GetDefaultTraitsMask(origin);
```

### GetDefaultTroopTraits
`public static void GetDefaultTroopTraits(BasicCharacterObject troop, out bool hasThrownWeapon, out bool hasSpear, out bool hasShield, out bool hasHeavyArmor)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 default troop traits 的结果。

```csharp
// 静态调用，不需要实例
AgentOriginUtilities.GetDefaultTroopTraits(troop, hasThrownWeapon, hasSpear, hasShield, hasHeavyArmor);
```

## 使用示例

```csharp
AgentOriginUtilities.GetDefaultTraitsMask(origin);
```

## 参见

- [本区域目录](../)
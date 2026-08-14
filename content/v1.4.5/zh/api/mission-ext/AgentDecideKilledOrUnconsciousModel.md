---
title: "AgentDecideKilledOrUnconsciousModel"
description: "AgentDecideKilledOrUnconsciousModel 的自动生成类参考。"
---
# AgentDecideKilledOrUnconsciousModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class AgentDecideKilledOrUnconsciousModel : MBGameModel<AgentDecideKilledOrUnconsciousModel>`
**Base:** `MBGameModel<AgentDecideKilledOrUnconsciousModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/AgentDecideKilledOrUnconsciousModel.cs`

## 概述

`AgentDecideKilledOrUnconsciousModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `AgentDecideKilledOrUnconsciousModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetAgentStateProbability
`public abstract float GetAgentStateProbability(Agent affectorAgent, Agent effectedAgent, DamageTypes damageType, WeaponFlags weaponFlags, out float useSurgeryProbability)`

**用途 / Purpose:** 读取并返回当前对象中 agent state probability 的结果。

```csharp
// 先通过子系统 API 拿到 AgentDecideKilledOrUnconsciousModel 实例
AgentDecideKilledOrUnconsciousModel agentDecideKilledOrUnconsciousModel = ...;
var result = agentDecideKilledOrUnconsciousModel.GetAgentStateProbability(affectorAgent, effectedAgent, damageType, weaponFlags, useSurgeryProbability);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
AgentDecideKilledOrUnconsciousModel instance = ...;
```

## 参见

- [本区域目录](../)
---
title: "StoryModeAgentDecideKilledOrUnconsciousModel"
description: "StoryModeAgentDecideKilledOrUnconsciousModel 的自动生成类参考。"
---
# StoryModeAgentDecideKilledOrUnconsciousModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode.GameComponents
**Type:** `public class StoryModeAgentDecideKilledOrUnconsciousModel : AgentDecideKilledOrUnconsciousModel`
**Base:** `AgentDecideKilledOrUnconsciousModel`
**File:** `Modules.StoryMode/StoryMode/StoryMode.GameComponents/StoryModeAgentDecideKilledOrUnconsciousModel.cs`

## 概述

`StoryModeAgentDecideKilledOrUnconsciousModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `StoryModeAgentDecideKilledOrUnconsciousModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetAgentStateProbability
`public override float GetAgentStateProbability(Agent affectorAgent, Agent effectedAgent, DamageTypes damageType, WeaponFlags weaponFlags, out float useSurgeryProbability)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 agent state probability 的结果。

```csharp
// 先通过子系统 API 拿到 StoryModeAgentDecideKilledOrUnconsciousModel 实例
StoryModeAgentDecideKilledOrUnconsciousModel storyModeAgentDecideKilledOrUnconsciousModel = ...;
var result = storyModeAgentDecideKilledOrUnconsciousModel.GetAgentStateProbability(affectorAgent, effectedAgent, damageType, weaponFlags, useSurgeryProbability);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<StoryModeAgentDecideKilledOrUnconsciousModel>(new MyStoryModeAgentDecideKilledOrUnconsciousModel());
```

## 参见

- [本区域目录](../)
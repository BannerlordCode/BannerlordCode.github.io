---
title: "SandboxAgentDecideKilledOrUnconsciousModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SandboxAgentDecideKilledOrUnconsciousModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SandboxAgentDecideKilledOrUnconsciousModel

**Namespace:** SandBox.GameComponents
**Module:** SandBox.GameComponents
**Type:** `public class SandboxAgentDecideKilledOrUnconsciousModel : AgentDecideKilledOrUnconsciousModel`
**Base:** `AgentDecideKilledOrUnconsciousModel`
**File:** `SandBox/GameComponents/SandboxAgentDecideKilledOrUnconsciousModel.cs`

## 概述

`SandboxAgentDecideKilledOrUnconsciousModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `SandboxAgentDecideKilledOrUnconsciousModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetAgentStateProbability
`public override float GetAgentStateProbability(Agent affectorAgent, Agent effectedAgent, DamageTypes damageType, WeaponFlags weaponFlags, out float useSurgeryProbability)`

**用途 / Purpose:** 获取 `agent state probability` 的当前值。

## 使用示例

```csharp
Game.Current.ReplaceModel<SandboxAgentDecideKilledOrUnconsciousModel>(new MySandboxAgentDecideKilledOrUnconsciousModel());
```

## 参见

- [完整类目录](../catalog)
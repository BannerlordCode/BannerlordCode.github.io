---
title: "DefaultAgentDecideKilledOrUnconsciousModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultAgentDecideKilledOrUnconsciousModel`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultAgentDecideKilledOrUnconsciousModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DefaultAgentDecideKilledOrUnconsciousModel : AgentDecideKilledOrUnconsciousModel`
**Base:** `AgentDecideKilledOrUnconsciousModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/DefaultAgentDecideKilledOrUnconsciousModel.cs`

## 概述

`DefaultAgentDecideKilledOrUnconsciousModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultAgentDecideKilledOrUnconsciousModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetAgentStateProbability
`public override float GetAgentStateProbability(Agent affectorAgent, Agent effectedAgent, DamageTypes damageType, WeaponFlags weaponFlags, out float useSurgeryProbability)`

**用途 / Purpose:** 获取 `agent state probability` 的当前值。

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultAgentDecideKilledOrUnconsciousModel>(new MyDefaultAgentDecideKilledOrUnconsciousModel());
```

## 参见

- [完整类目录](../catalog)
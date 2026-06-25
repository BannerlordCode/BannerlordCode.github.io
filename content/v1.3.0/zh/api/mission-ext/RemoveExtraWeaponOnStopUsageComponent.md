---
title: "RemoveExtraWeaponOnStopUsageComponent"
description: "RemoveExtraWeaponOnStopUsageComponent 的自动生成类参考。"
---
# RemoveExtraWeaponOnStopUsageComponent

**Namespace:** TaleWorlds.MountAndBlade.Objects.Usables
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class RemoveExtraWeaponOnStopUsageComponent : UsableMissionObjectComponent`
**Base:** `UsableMissionObjectComponent`
**File:** `TaleWorlds.MountAndBlade/Objects/Usables/RemoveExtraWeaponOnStopUsageComponent.cs`

## 概述

`RemoveExtraWeaponOnStopUsageComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `RemoveExtraWeaponOnStopUsageComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 使用示例

```csharp
var component = agent.GetComponent<RemoveExtraWeaponOnStopUsageComponent>();
```

## 参见

- [本区域目录](../)
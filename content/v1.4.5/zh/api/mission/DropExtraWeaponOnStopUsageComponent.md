---
title: "DropExtraWeaponOnStopUsageComponent"
description: "DropExtraWeaponOnStopUsageComponent 的自动生成类参考。"
---
# DropExtraWeaponOnStopUsageComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `internal class DropExtraWeaponOnStopUsageComponent : UsableMissionObjectComponent`
**Base:** `UsableMissionObjectComponent`
**File:** `TaleWorlds.MountAndBlade/DropExtraWeaponOnStopUsageComponent.cs`

## 概述

`DropExtraWeaponOnStopUsageComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `DropExtraWeaponOnStopUsageComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 使用示例

```csharp
var component = agent.GetComponent<DropExtraWeaponOnStopUsageComponent>();
```

## 参见

- [本区域目录](../)
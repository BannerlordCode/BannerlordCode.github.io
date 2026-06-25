---
title: "ParticleSystemManager"
description: "ParticleSystemManager 的自动生成类参考。"
---
# ParticleSystemManager

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class ParticleSystemManager`
**Base:** 无
**File:** `TaleWorlds.Engine/ParticleSystemManager.cs`

## 概述

`ParticleSystemManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `ParticleSystemManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetRuntimeIdByName
`public static int GetRuntimeIdByName(string particleSystemName)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 runtime id by name 的结果。

```csharp
// 静态调用，不需要实例
ParticleSystemManager.GetRuntimeIdByName("example");
```

## 使用示例

```csharp
var manager = ParticleSystemManager.Current;
```

## 参见

- [本区域目录](../)
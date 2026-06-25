---
title: "SkinVoiceManager"
description: "SkinVoiceManager 的自动生成类参考。"
---
# SkinVoiceManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class SkinVoiceManager`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/SkinVoiceManager.cs`

## 概述

`SkinVoiceManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `SkinVoiceManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `TypeID` | `public string TypeID { get; }` |
| `Index` | `public int Index { get; }` |

## 主要方法

### GetVoiceDefinitionCountWithMonsterSoundAndCollisionInfoClassName
`public static int GetVoiceDefinitionCountWithMonsterSoundAndCollisionInfoClassName(string className)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 voice definition count with monster sound and collision info class name 的结果。

```csharp
// 静态调用，不需要实例
SkinVoiceManager.GetVoiceDefinitionCountWithMonsterSoundAndCollisionInfoClassName("example");
```

### GetVoiceDefinitionListWithMonsterSoundAndCollisionInfoClassName
`public static void GetVoiceDefinitionListWithMonsterSoundAndCollisionInfoClassName(string className, int definitionIndices)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 voice definition list with monster sound and collision info class name 的结果。

```csharp
// 静态调用，不需要实例
SkinVoiceManager.GetVoiceDefinitionListWithMonsterSoundAndCollisionInfoClassName("example", 0);
```

### GetName
`public TextObject GetName()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 name 的结果。

```csharp
// 先通过子系统 API 拿到 SkinVoiceManager 实例
SkinVoiceManager skinVoiceManager = ...;
var result = skinVoiceManager.GetName();
```

## 使用示例

```csharp
var manager = SkinVoiceManager.Current;
```

## 参见

- [本区域目录](../)
---
title: "HandMorphTest"
description: "HandMorphTest 的自动生成类参考。"
---
# HandMorphTest

**Namespace:** TaleWorlds.MountAndBlade.View.Scripts
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class HandMorphTest : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.Scripts/HandMorphTest.cs`

## 概述

`HandMorphTest` 位于 `TaleWorlds.MountAndBlade.View.Scripts`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.View.Scripts` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ClothColor1` | `public uint ClothColor1 { get; }` |
| `ClothColor2` | `public uint ClothColor2 { get; }` |

## 主要方法

### SpawnCharacter
`public void SpawnCharacter()`

**用途 / Purpose:** 调用 SpawnCharacter 对应的操作。

```csharp
// 先通过子系统 API 拿到 HandMorphTest 实例
HandMorphTest handMorphTest = ...;
handMorphTest.SpawnCharacter();
```

### Reset
`public void Reset()`

**用途 / Purpose:** 将当前对象重置为默认或初始状态。

```csharp
// 先通过子系统 API 拿到 HandMorphTest 实例
HandMorphTest handMorphTest = ...;
handMorphTest.Reset();
```

### InitWithCharacter
`public void InitWithCharacter(CharacterCode characterCode)`

**用途 / Purpose:** 为 with character 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 HandMorphTest 实例
HandMorphTest handMorphTest = ...;
handMorphTest.InitWithCharacter(characterCode);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
HandMorphTest handMorphTest = ...;
handMorphTest.SpawnCharacter();
```

## 参见

- [本区域目录](../)
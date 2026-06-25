---
title: "BodyGenerator"
description: "BodyGenerator 的自动生成类参考。"
---
# BodyGenerator

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BodyGenerator`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/BodyGenerator.cs`

## 概述

`BodyGenerator` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Character` | `public BasicCharacterObject Character { get; }` |

## 主要方法

### InitBodyGenerator
`public FaceGenerationParams InitBodyGenerator(bool isDressed)`

**用途 / Purpose:** **用途 / Purpose:** 为 body generator 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 BodyGenerator 实例
BodyGenerator bodyGenerator = ...;
var result = bodyGenerator.InitBodyGenerator(false);
```

### RefreshFace
`public void RefreshFace(FaceGenerationParams faceGenerationParams, bool hasEquipment)`

**用途 / Purpose:** **用途 / Purpose:** 使 face 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 BodyGenerator 实例
BodyGenerator bodyGenerator = ...;
bodyGenerator.RefreshFace(faceGenerationParams, false);
```

### SaveCurrentCharacter
`public void SaveCurrentCharacter()`

**用途 / Purpose:** **用途 / Purpose:** 将 current character 写入持久化存储或流中。

```csharp
// 先通过子系统 API 拿到 BodyGenerator 实例
BodyGenerator bodyGenerator = ...;
bodyGenerator.SaveCurrentCharacter();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
BodyGenerator bodyGenerator = ...;
bodyGenerator.InitBodyGenerator(false);
```

## 参见

- [本区域目录](../)
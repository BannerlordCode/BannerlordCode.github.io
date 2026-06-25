---
title: "CharacterCode"
description: "CharacterCode 的自动生成类参考。"
---
# CharacterCode

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class CharacterCode`
**Base:** 无
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/CharacterCode.cs`

## 概述

`CharacterCode` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `EquipmentCode` | `public string EquipmentCode { get; }` |
| `Code` | `public string Code { get; }` |
| `IsFemale` | `public bool IsFemale { get; }` |
| `IsHero` | `public bool IsHero { get; }` |
| `FormationClass` | `public FormationClass FormationClass { get; set; }` |
| `Color1` | `public uint Color1 { get; }` |
| `Color2` | `public uint Color2 { get; }` |
| `Race` | `public int Race { get; }` |

## 主要方法

### CalculateEquipment
`public Equipment CalculateEquipment()`

**用途 / Purpose:** 计算equipment的当前值或结果。

```csharp
// 先通过子系统 API 拿到 CharacterCode 实例
CharacterCode characterCode = ...;
var result = characterCode.CalculateEquipment();
```

### CreateFrom
`public static CharacterCode CreateFrom(BasicCharacterObject character)`

**用途 / Purpose:** 构建一个新的 from 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
CharacterCode.CreateFrom(character);
```

### CreateFrom
`public static CharacterCode CreateFrom(BasicCharacterObject character, Equipment equipment)`

**用途 / Purpose:** 构建一个新的 from 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
CharacterCode.CreateFrom(character, equipment);
```

### CreateFrom
`public static CharacterCode CreateFrom(string equipmentCode, BodyProperties bodyProperties, bool isFemale, bool isHero, uint color1, uint color2, FormationClass formationClass, int race)`

**用途 / Purpose:** 构建一个新的 from 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
CharacterCode.CreateFrom("example", bodyProperties, false, false, 0, 0, formationClass, 0);
```

### CreateNewCodeString
`public string CreateNewCodeString()`

**用途 / Purpose:** 构建一个新的 new code string 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 CharacterCode 实例
CharacterCode characterCode = ...;
var result = characterCode.CreateNewCodeString();
```

### CreateEmpty
`public static CharacterCode CreateEmpty()`

**用途 / Purpose:** 构建一个新的 empty 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
CharacterCode.CreateEmpty();
```

### CreateFrom
`public static CharacterCode CreateFrom(string code)`

**用途 / Purpose:** 构建一个新的 from 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
CharacterCode.CreateFrom("example");
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
CharacterCode characterCode = ...;
characterCode.CalculateEquipment();
```

## 参见

- [本区域目录](../)
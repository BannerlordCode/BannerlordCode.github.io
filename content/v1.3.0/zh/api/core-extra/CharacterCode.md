---
title: "CharacterCode"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CharacterCode`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CharacterCode

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class CharacterCode`
**Base:** 无
**File:** `TaleWorlds.Core/CharacterCode.cs`

## 概述

`CharacterCode` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsEmpty` | `public bool IsEmpty { get; }` |
| `EquipmentCode` | `public string EquipmentCode { get; }` |
| `Code` | `public string Code { get; }` |
| `IsFemale` | `public bool IsFemale { get; }` |
| `IsHero` | `public bool IsHero { get; }` |
| `FaceDirtAmount` | `public float FaceDirtAmount { get; set; }` |
| `Banner` | `public Banner Banner { get; set; }` |
| `FormationClass` | `public FormationClass FormationClass { get; set; }` |
| `Color1` | `public uint Color1 { get; }` |
| `Color2` | `public uint Color2 { get; }` |
| `Race` | `public int Race { get; }` |

## 主要方法

### CalculateEquipment
`public Equipment CalculateEquipment()`

**用途 / Purpose:** 处理 `calculate equipment` 相关逻辑。

### CreateFrom
`public static CharacterCode CreateFrom(BasicCharacterObject character)`

**用途 / Purpose:** 创建一个 `from` 实例或对象。

### CreateFrom
`public static CharacterCode CreateFrom(BasicCharacterObject character, Equipment equipment)`

**用途 / Purpose:** 创建一个 `from` 实例或对象。

### CreateFrom
`public static CharacterCode CreateFrom(string equipmentCode, BodyProperties bodyProperties, bool isFemale, bool isHero, uint color1, uint color2, FormationClass formationClass, int race)`

**用途 / Purpose:** 创建一个 `from` 实例或对象。

### CreateNewCodeString
`public string CreateNewCodeString()`

**用途 / Purpose:** 创建一个 `new code string` 实例或对象。

### CreateEmpty
`public static CharacterCode CreateEmpty()`

**用途 / Purpose:** 创建一个 `empty` 实例或对象。

### CreateFrom
`public static CharacterCode CreateFrom(string code)`

**用途 / Purpose:** 创建一个 `from` 实例或对象。

## 使用示例

```csharp
var value = new CharacterCode();
value.CalculateEquipment();
```

## 参见

- [完整类目录](../catalog)
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CharacterCode`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CharacterCode

**命名空间:** TaleWorlds.Core
**模块:** TaleWorlds.Core
**类型:** 类 class class
**领域:** 核心数据 Core

## 概述

> 本页为自动生成的存根。`CharacterCode` 是 `TaleWorlds.Core` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
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

```csharp
public Equipment CalculateEquipment()
```

### CreateFrom

```csharp
public static CharacterCode CreateFrom(BasicCharacterObject character)
```

### CreateFrom

```csharp
public static CharacterCode CreateFrom(BasicCharacterObject character, Equipment equipment)
```

### CreateFrom

```csharp
public static CharacterCode CreateFrom(string equipmentCode, BodyProperties bodyProperties, bool isFemale, bool isHero, uint color1, uint color2, FormationClass formationClass, int race)
```

### CreateNewCodeString

```csharp
public string CreateNewCodeString()
```

### CreateEmpty

```csharp
public static CharacterCode CreateEmpty()
```

### CreateFrom

```csharp
public static CharacterCode CreateFrom(string code)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)
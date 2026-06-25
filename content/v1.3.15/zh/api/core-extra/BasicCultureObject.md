---
title: "BasicCultureObject"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BasicCultureObject`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BasicCultureObject

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class BasicCultureObject : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.Core/BasicCultureObject.cs`

## 概述

`BasicCultureObject` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Name` | `public TextObject Name { get; }` |
| `IsMainCulture` | `public bool IsMainCulture { get; }` |
| `IsBandit` | `public bool IsBandit { get; }` |
| `CanHaveSettlement` | `public bool CanHaveSettlement { get; }` |
| `Color` | `public uint Color { get; }` |
| `Color2` | `public uint Color2 { get; }` |
| `ClothAlternativeColor` | `public uint ClothAlternativeColor { get; }` |
| `ClothAlternativeColor2` | `public uint ClothAlternativeColor2 { get; }` |
| `BackgroundColor1` | `public uint BackgroundColor1 { get; }` |
| `ForegroundColor1` | `public uint ForegroundColor1 { get; }` |
| `BackgroundColor2` | `public uint BackgroundColor2 { get; }` |
| `ForegroundColor2` | `public uint ForegroundColor2 { get; }` |
| `EncounterBackgroundMesh` | `public string EncounterBackgroundMesh { get; }` |
| `Banner` | `public Banner Banner { get; }` |

## 主要方法

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**用途 / Purpose:** 处理 `deserialize` 相关逻辑。

## 使用示例

```csharp
var value = new BasicCultureObject();
value.ToString();
```

## 参见

- [完整类目录](../catalog)
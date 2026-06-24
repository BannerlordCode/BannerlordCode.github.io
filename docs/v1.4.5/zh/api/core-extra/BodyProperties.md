<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BodyProperties`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# BodyProperties

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public struct BodyProperties`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/BodyProperties.cs`

## 概述

`BodyProperties` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### FromXmlNode
`public static bool FromXmlNode(XmlNode node, out BodyProperties bodyProperties)`

**用途 / Purpose:** 处理 `from xml node` 相关逻辑。

### FromString
`public static bool FromString(string keyValue, out BodyProperties bodyProperties)`

**用途 / Purpose:** 处理 `from string` 相关逻辑。

### GetRandomBodyProperties
`public static BodyProperties GetRandomBodyProperties(int race, bool isFemale, BodyProperties bodyPropertiesMin, BodyProperties bodyPropertiesMax, int hairCoverType, int seed, string hairTags, string beardTags, string tattooTags, float variationAmount = 0f)`

**用途 / Purpose:** 获取 `random body properties` 的当前值。

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### Equals
`public override bool Equals(object obj)`

**用途 / Purpose:** 处理 `equals` 相关逻辑。

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 获取 `hash code` 的当前值。

### ClampForMultiplayer
`public BodyProperties ClampForMultiplayer()`

**用途 / Purpose:** 处理 `clamp for multiplayer` 相关逻辑。

## 使用示例

```csharp
BodyProperties.FromXmlNode(node, bodyProperties);
```

## 参见

- [完整类目录](../catalog)
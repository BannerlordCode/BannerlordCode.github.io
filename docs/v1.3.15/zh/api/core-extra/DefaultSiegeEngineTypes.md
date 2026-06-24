<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultSiegeEngineTypes`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultSiegeEngineTypes

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class DefaultSiegeEngineTypes`
**Base:** 无
**File:** `TaleWorlds.Core/DefaultSiegeEngineTypes.cs`

## 概述

`DefaultSiegeEngineTypes` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Preparations` | `public static SiegeEngineType Preparations { get; }` |
| `Ladder` | `public static SiegeEngineType Ladder { get; }` |
| `Ballista` | `public static SiegeEngineType Ballista { get; }` |
| `FireBallista` | `public static SiegeEngineType FireBallista { get; }` |
| `Ram` | `public static SiegeEngineType Ram { get; }` |
| `ImprovedRam` | `public static SiegeEngineType ImprovedRam { get; }` |
| `SiegeTower` | `public static SiegeEngineType SiegeTower { get; }` |
| `HeavySiegeTower` | `public static SiegeEngineType HeavySiegeTower { get; }` |
| `Catapult` | `public static SiegeEngineType Catapult { get; }` |
| `FireCatapult` | `public static SiegeEngineType FireCatapult { get; }` |
| `Onager` | `public static SiegeEngineType Onager { get; }` |
| `FireOnager` | `public static SiegeEngineType FireOnager { get; }` |
| `Bricole` | `public static SiegeEngineType Bricole { get; }` |
| `Trebuchet` | `public static SiegeEngineType Trebuchet { get; }` |
| `FireTrebuchet` | `public static SiegeEngineType FireTrebuchet { get; }` |

## 使用示例

```csharp
var value = new DefaultSiegeEngineTypes();
```

## 参见

- [完整类目录](../catalog)
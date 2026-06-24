<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ItemPhysicsSoundContainer`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ItemPhysicsSoundContainer

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class ItemPhysicsSoundContainer`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/ItemPhysicsSoundContainer.cs`

## 概述

`ItemPhysicsSoundContainer` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `SoundCodePhysicsBoulderDefault` | `public static int SoundCodePhysicsBoulderDefault { get; }` |
| `SoundCodePhysicsArrowlikeDefault` | `public static int SoundCodePhysicsArrowlikeDefault { get; }` |
| `SoundCodePhysicsBowlikeDefault` | `public static int SoundCodePhysicsBowlikeDefault { get; }` |
| `SoundCodePhysicsDaggerlikeDefault` | `public static int SoundCodePhysicsDaggerlikeDefault { get; }` |
| `SoundCodePhysicsGreatswordlikeDefault` | `public static int SoundCodePhysicsGreatswordlikeDefault { get; }` |
| `SoundCodePhysicsShieldlikeDefault` | `public static int SoundCodePhysicsShieldlikeDefault { get; }` |
| `SoundCodePhysicsSpearlikeDefault` | `public static int SoundCodePhysicsSpearlikeDefault { get; }` |
| `SoundCodePhysicsSwordlikeDefault` | `public static int SoundCodePhysicsSwordlikeDefault { get; }` |
| `SoundCodePhysicsBoulderWood` | `public static int SoundCodePhysicsBoulderWood { get; }` |
| `SoundCodePhysicsArrowlikeWood` | `public static int SoundCodePhysicsArrowlikeWood { get; }` |
| `SoundCodePhysicsBowlikeWood` | `public static int SoundCodePhysicsBowlikeWood { get; }` |
| `SoundCodePhysicsDaggerlikeWood` | `public static int SoundCodePhysicsDaggerlikeWood { get; }` |
| `SoundCodePhysicsGreatswordlikeWood` | `public static int SoundCodePhysicsGreatswordlikeWood { get; }` |
| `SoundCodePhysicsShieldlikeWood` | `public static int SoundCodePhysicsShieldlikeWood { get; }` |
| `SoundCodePhysicsSpearlikeWood` | `public static int SoundCodePhysicsSpearlikeWood { get; }` |
| `SoundCodePhysicsSwordlikeWood` | `public static int SoundCodePhysicsSwordlikeWood { get; }` |
| `SoundCodePhysicsBoulderStone` | `public static int SoundCodePhysicsBoulderStone { get; }` |
| `SoundCodePhysicsArrowlikeStone` | `public static int SoundCodePhysicsArrowlikeStone { get; }` |
| `SoundCodePhysicsBowlikeStone` | `public static int SoundCodePhysicsBowlikeStone { get; }` |
| `SoundCodePhysicsDaggerlikeStone` | `public static int SoundCodePhysicsDaggerlikeStone { get; }` |
| `SoundCodePhysicsGreatswordlikeStone` | `public static int SoundCodePhysicsGreatswordlikeStone { get; }` |
| `SoundCodePhysicsShieldlikeStone` | `public static int SoundCodePhysicsShieldlikeStone { get; }` |
| `SoundCodePhysicsSpearlikeStone` | `public static int SoundCodePhysicsSpearlikeStone { get; }` |
| `SoundCodePhysicsSwordlikeStone` | `public static int SoundCodePhysicsSwordlikeStone { get; }` |
| `SoundCodePhysicsWater` | `public static int SoundCodePhysicsWater { get; }` |

## 使用示例

```csharp
var example = new ItemPhysicsSoundContainer();
```

## 参见

- [完整类目录](../catalog)
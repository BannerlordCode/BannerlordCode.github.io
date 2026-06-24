<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Badge`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Badge

**Namespace:** TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class Badge`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade.Diamond/MultiplayerBadges/Badge.cs`

## 概述

`Badge` 位于 `TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Index` | `public int Index { get; }` |
| `Type` | `public BadgeType Type { get; }` |
| `StringId` | `public string StringId { get; }` |
| `GroupId` | `public string GroupId { get; }` |
| `Name` | `public TextObject Name { get; }` |
| `Description` | `public TextObject Description { get; }` |
| `IsVisibleOnlyWhenEarned` | `public bool IsVisibleOnlyWhenEarned { get; }` |
| `PeriodStart` | `public DateTime PeriodStart { get; }` |
| `PeriodEnd` | `public DateTime PeriodEnd { get; }` |
| `IsActive` | `public bool IsActive { get; }` |
| `IsTimed` | `public bool IsTimed { get; }` |

## 主要方法

### Deserialize
`public virtual void Deserialize(XmlNode node)`

**用途 / Purpose:** 处理 `deserialize` 相关逻辑。

## 使用示例

```csharp
var value = new Badge();
value.Deserialize(node);
```

## 参见

- [完整类目录](../catalog)
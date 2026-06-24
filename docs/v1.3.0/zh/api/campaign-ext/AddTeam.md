<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AddTeam`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# AddTeam

**Namespace:** NetworkMessages.FromServer
**Module:** NetworkMessages.FromServer
**Type:** `public sealed class AddTeam : GameNetworkMessage`
**Base:** `GameNetworkMessage`
**File:** `TaleWorlds.MountAndBlade/NetworkMessages/FromServer/AddTeam.cs`

## 概述

`AddTeam` 位于 `NetworkMessages.FromServer`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `NetworkMessages.FromServer` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `TeamIndex` | `public int TeamIndex { get; }` |
| `Side` | `public BattleSideEnum Side { get; }` |
| `Color` | `public uint Color { get; }` |
| `Color2` | `public uint Color2 { get; }` |
| `BannerCode` | `public string BannerCode { get; }` |
| `IsPlayerGeneral` | `public bool IsPlayerGeneral { get; }` |
| `IsPlayerSergeant` | `public bool IsPlayerSergeant { get; }` |

## 使用示例

```csharp
var example = new AddTeam();
```

## 参见

- [完整类目录](../catalog)
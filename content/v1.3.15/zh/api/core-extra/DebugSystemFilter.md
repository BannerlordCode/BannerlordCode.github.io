---
title: "DebugSystemFilter"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DebugSystemFilter`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DebugSystemFilter

**命名空间:** TaleWorlds.Library
**模块:** TaleWorlds.Library
**类型:** `public enum DebugSystemFilter : ulong`
**Base:** `ulong`
**领域:** core-extra

## 概述

`DebugSystemFilter` 位于 `TaleWorlds.Library`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 枚举值

| Name |
|------|
| `None` |
| `Graphics` |
| `4294967296UL` |
| `ArtificialIntelligence` |
| `8589934592UL` |
| `MultiPlayer` |
| `17179869184UL` |
| `IO` |
| `34359738368UL` |
| `Network` |
| `68719476736UL` |
| `CampaignEvents` |
| `137438953472UL` |
| `MemoryManager` |
| `274877906944UL` |
| `TCP` |
| `549755813888UL` |
| `FileManager` |
| `1099511627776UL` |
| `NaturalInteractionDevice` |
| `2199023255552UL` |
| `UDP` |
| `4398046511104UL` |
| `ResourceManager` |
| `8796093022208UL` |
| `Mono` |
| `17592186044416UL` |
| `ONO` |
| `35184372088832UL` |
| `Old` |

## 使用示例

```csharp
DebugSystemFilter example = DebugSystemFilter.None;
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)

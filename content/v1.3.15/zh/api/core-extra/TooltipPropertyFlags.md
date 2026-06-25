---
title: "TooltipPropertyFlags"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TooltipPropertyFlags`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TooltipPropertyFlags

**命名空间:** TaleWorlds.Core.ViewModelCollection.Information
**模块:** TaleWorlds.Core
**类型:** `public enum TooltipPropertyFlags`
**领域:** core-extra

## 概述

`TooltipPropertyFlags` 位于 `TaleWorlds.Core.ViewModelCollection.Information`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.Core.ViewModelCollection.Information` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 枚举值

| Name |
|------|
| `None` |
| `0` |
| `MultiLine` |
| `1` |
| `BattleMode` |
| `2` |
| `BattleModeOver` |
| `4` |
| `WarFirstEnemy` |
| `8` |
| `WarFirstAlly` |
| `16` |
| `WarFirstNeutral` |
| `32` |
| `WarSecondEnemy` |
| `64` |
| `WarSecondAlly` |
| `128` |
| `WarSecondNeutral` |
| `256` |
| `RundownSeperator` |
| `512` |
| `DefaultSeperator` |
| `1024` |
| `Cost` |
| `2048` |
| `Title` |
| `4096` |
| `RundownResult` |

## 使用示例

```csharp
TooltipPropertyFlags example = TooltipPropertyFlags.None;
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)

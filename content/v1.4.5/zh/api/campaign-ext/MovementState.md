---
title: "MovementState"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MovementState`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MovementState

**命名空间:** SandBox.BoardGames.Pawns
**模块:** SandBox.BoardGames
**类型:** `public enum MovementState`
**领域:** campaign-ext

## 概述

`MovementState` 位于 `SandBox.BoardGames.Pawns`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `SandBox.BoardGames.Pawns` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 枚举值

| Name |
|------|
| `MovingForward` |
| `MovingBackward` |

## 使用示例

```csharp
MovementState example = MovementState.MovingForward;
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)

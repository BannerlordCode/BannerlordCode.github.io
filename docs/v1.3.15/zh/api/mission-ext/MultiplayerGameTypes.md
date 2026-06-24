<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerGameTypes`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerGameTypes

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** `public static class MultiplayerGameTypes`
**领域:** mission-ext

## 概述

`MultiplayerGameTypes` 位于 `TaleWorlds.MountAndBlade`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Initialize
`public static void Initialize()`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### CheckGameTypeInfoExists
`public static bool CheckGameTypeInfoExists(string gameType)`

**用途 / Purpose:** 处理 `check game type info exists` 相关逻辑。

### GetGameTypeInfo
`public static MultiplayerGameTypeInfo GetGameTypeInfo(string gameType)`

**用途 / Purpose:** 获取 `game type info` 的当前值。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
MultiplayerGameTypes.Initialize();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)

<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BoostSkillCheeat`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# BoostSkillCheeat

**命名空间:** SandBox
**模块:** SandBox
**类型:** `public class BoostSkillCheeat : GameplayCheatItem`
**Base:** `GameplayCheatItem`
**领域:** campaign-ext

## 概述

`BoostSkillCheeat` 位于 `SandBox`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `SandBox` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetCheats
`public override IEnumerable<GameplayCheatBase> GetCheats()`

**用途 / Purpose:** 获取 `cheats` 的当前值。

### GetName
`public override TextObject GetName()`

**用途 / Purpose:** 获取 `name` 的当前值。

### ExecuteCheat
`public override void ExecuteCheat()`

**用途 / Purpose:** 执行 `cheat` 操作或流程。

### GetName
`public override TextObject GetName()`

**用途 / Purpose:** 获取 `name` 的当前值。

## 使用示例

```csharp
// 先从游戏状态中拿到一个 BoostSkillCheeat 实例，再调用它的公开方法
var value = new BoostSkillCheeat();
value.GetCheats();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)

<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `StanceTypes`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# StanceTypes

**命名空间:** TaleWorlds.Core.ViewModelCollection
**模块:** TaleWorlds.Core
**类型:** `public enum StanceTypes`
**领域:** core-extra

## 概述

`StanceTypes` 位于 `TaleWorlds.Core.ViewModelCollection`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.Core.ViewModelCollection` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 枚举值

| Name |
|------|
| `None` |
| `EmphasizeFace` |
| `SideView` |
| `CelebrateVictory` |

## 使用示例

```csharp
StanceTypes example = StanceTypes.None;
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)

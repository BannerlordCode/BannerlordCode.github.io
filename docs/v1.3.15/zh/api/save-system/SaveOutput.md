<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SaveOutput`
- [← 本领域 / 返回 save-system](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SaveOutput

**命名空间:** TaleWorlds.SaveSystem.Save
**模块:** TaleWorlds.SaveSystem
**类型:** `public class SaveOutput`
**领域:** save-system

## 概述

`SaveOutput` 位于 `TaleWorlds.SaveSystem.Save`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.SaveSystem.Save` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Data` | `public GameData Data { get; }` |
| `Result` | `public SaveResult Result { get; }` |
| `Errors` | `public SaveError Errors { get; }` |
| `Successful` | `public bool Successful { get; }` |
| `IsContinuing` | `public bool IsContinuing { get; }` |

## 主要方法

### PrintStatus
`public void PrintStatus()`

**用途 / Purpose:** 处理 `print status` 相关逻辑。

## 使用示例

```csharp
// 先从游戏状态中拿到一个 SaveOutput 实例，再调用它的公开方法
var value = new SaveOutput();
value.PrintStatus();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-save)

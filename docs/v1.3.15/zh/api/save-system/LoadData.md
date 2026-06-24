<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `LoadData`
- [← 本领域 / 返回 save-system](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LoadData

**命名空间:** TaleWorlds.SaveSystem
**模块:** TaleWorlds.SaveSystem
**类型:** `public class LoadData`
**领域:** save-system

## 概述

`LoadData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `LoadData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `MetaData` | `public MetaData MetaData { get; }` |
| `GameData` | `public GameData GameData { get; }` |

## 使用示例

```csharp
var value = new LoadData();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-save)

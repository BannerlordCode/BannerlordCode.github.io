<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ObjectLoadData`
- [← 本领域 / 返回 save-system](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ObjectLoadData

**Namespace:** TaleWorlds.SaveSystem.Load
**Module:** TaleWorlds.SaveSystem
**Type:** `public class ObjectLoadData`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem.Load/ObjectLoadData.cs`

## 概述

`ObjectLoadData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `ObjectLoadData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Id` | `public int Id { get; }` |
| `Target` | `public object Target { get; }` |
| `Context` | `public LoadContext Context { get; }` |
| `TypeDefinition` | `public TypeDefinition TypeDefinition { get; }` |

## 主要方法

### GetDataBySaveId
`public object GetDataBySaveId(int localSaveId)`

**用途 / Purpose:** 获取 `data by save id` 的当前值。

### GetMemberValueBySaveId
`public object GetMemberValueBySaveId(int localSaveId, int typeLevel)`

**用途 / Purpose:** 获取 `member value by save id` 的当前值。

### GetMemberValueBySaveId
`public object GetMemberValueBySaveId(int localSaveId)`

**用途 / Purpose:** 获取 `member value by save id` 的当前值。

### GetFieldValueBySaveId
`public object GetFieldValueBySaveId(int localSaveId)`

**用途 / Purpose:** 获取 `field value by save id` 的当前值。

### GetPropertyValueBySaveId
`public object GetPropertyValueBySaveId(int localSaveId)`

**用途 / Purpose:** 获取 `property value by save id` 的当前值。

### HasMember
`public bool HasMember(int localSaveId)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `member`。

### HasMember
`public bool HasMember(int localSaveId, int typeLevel)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `member`。

### InitializeReaders
`public void InitializeReaders(SaveEntryFolder saveEntryFolder)`

**用途 / Purpose:** 初始化 `readers` 的状态、资源或绑定。

### CreateStruct
`public void CreateStruct()`

**用途 / Purpose:** 创建一个 `struct` 实例或对象。

### FillCreatedObject
`public void FillCreatedObject()`

**用途 / Purpose:** 处理 `fill created object` 相关逻辑。

### Read
`public void Read()`

**用途 / Purpose:** 处理 `read` 相关逻辑。

### FillObject
`public void FillObject()`

**用途 / Purpose:** 处理 `fill object` 相关逻辑。

## 使用示例

```csharp
var value = new ObjectLoadData();
```

## 参见

- [完整类目录](../catalog)
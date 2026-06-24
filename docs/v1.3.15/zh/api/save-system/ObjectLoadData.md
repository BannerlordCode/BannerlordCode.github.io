---
title: ObjectLoadData
description: ObjectLoadData - 存档加载时单个对象的反序列化数据容器
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ObjectLoadData`
- [← 本领域 / 返回 save-system](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ObjectLoadData
**命名空间:** TaleWorlds.SaveSystem.Load
**模块:** TaleWorlds.SaveSystem
**类型:** class

## 概述
`ObjectLoadData

` 是存档加载系统的核心数据容器，表示存档中一个对象的反序列化中间状态。它持有该对象的属性（Property）、字段（Field）和子结构（Child Struct）的加载数据，但不直接持有最终值——值在 

`Read()

` 阶段从二进制读取，在 

`FillObject()

` 阶段写入目标对象实例?
存档加载分为四个阶段：`InitializeReaders

`（从 

`SaveEntryFolder

` 读取二进制读者）?

`CreateStruct

`（用 

`FormatterServices.GetUninitializedObject

` 创建对象实例）→ 

`Read

`（从二进制读者读取实际值）?

`FillObject

`（将值写入对象实例的属性和字段）。这种分阶段设计确保循环引用和嵌套结构能正确处理?
## 心智模型
?

`ObjectLoadData

` 看作"对象重建的暂存区"。：它先从存档二进制流中收集所有成员的原始数据（`InitializeReaders

`），然后创建空壳对象（`CreateStruct

`），再逐个读取成员值（

`Read

`），最后把值填充到对象中（

`FillObject

`）?子结构（

`_childStructs

`）递归执行同样的流程，自定义结构体成员通过 

`SetCustomStructData

` 关联到对应的子结构实例?
## 主要属?\| 属?\| 类型 \| 说明 \|
\|------\|------\|------\|
\| 

`Id

` \| 

`int

` \| 对象在存档中的唯一标识 \|
\| 

`Target

` \| 

`object

` \| 反序列化后的目标对象实例 \|
\| 

`Context

` \| 

`LoadContext

` \| 加载上下文，提供类型定义和存档环?\|
\| 

`TypeDefinition

` \| 

`TypeDefinition

` \| 对象的类型定义，包含序列化规?\|

## 主要方法
### InitializeReaders
`

`

`csharp
public void InitializeReaders(SaveEntryFolder saveEntryFolder)
`

`

`
从存档条目文件夹中读取基础信息（SaveId、属性数、子结构数），并为每个属性和字段创建对应?

`PropertyLoadData

` / 

`FieldLoadData

` 读者。递归处理子结构?
### CreateStruct
`

`

`csharp
public void CreateStruct()
`

`

`
通过 

`FormatterServices.GetUninitializedObject

` 创建类型实例（跳过构造函数），赋值给 

`Target

`。递归处理子结构?
### Read
`

`

`csharp
public void Read()
`

`

`
从二进制读者中读取所有成员的实际值。对于自定义结构体成员，将索引映射到子结构的 

`Target

`。递归处理子结构?
### FillObject
`

`

`csharp
public void FillObject()
`

`

`
将读取的值写?

`Target

` 对象的属性和字段中。递归处理子结构?
### GetDataBySaveId
`

`

`csharp
public object GetDataBySaveId(int localSaveId)
`

`

`
按本地存?ID 查找成员的已加载数据，返?

`MemberLoadData.GetDataToUse()

` 的结果?
### GetFieldValueBySaveId / GetPropertyValueBySaveId
`

`

`csharp
public object GetFieldValueBySaveId(int localSaveId)
public object GetPropertyValueBySaveId(int localSaveId)
`

`

`
分别按存?ID 查找字段或属性的已加载值?
### HasMember
`

`

`csharp
public bool HasMember(int localSaveId)
`

`

`
检查是否存在指定本地存?ID 的成员?
## 使用示例
### 示例: 存档加载流程
**场景**: 理解存档系统如何重建对象
`

`

`csharp
// 存档加载?SaveManager 内部驱动，开发者通常不直接调?// 流程: InitializeReaders ?CreateStruct ?Read ?FillObject
// ObjectLoadData 是这个流程中的中间容?

`

`

`
**要点**: 四个阶段必须按顺序执行；

`CreateStruct

` 跳过构造函数，

`FillObject

` 才填充值?
## 参见
- [完整类目录](../catalog-save)
- [API 目录](../)
- [SDK 总览](../../architecture/sdk-overview)

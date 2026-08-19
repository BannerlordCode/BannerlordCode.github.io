---
title: "ElementLoadData"
description: "加载时容器内每个元素的槽位：把一条字节读流解析成待用的运行时值（对象引用、容器引用、字符串 id 或基本类型），供 ContainerLoadData 在填值时取用。"
---

# ElementLoadData

**命名空间：** `TaleWorlds.SaveSystem.Load`
**模块：** `TaleWorlds.SaveSystem`
**类型：** `internal class ElementLoadData : VariableLoadData`
**基类/Base：** `VariableLoadData`
**源文件路径/Source：** `TaleWorlds.SaveSystem/Load/ElementLoadData.cs`

## 一句话职责

加载时容器内每一个元素的「槽位」——把一条字节读流解析成待用的运行时值（对象引用、容器引用、字符串 id 或基本类型），供 [ContainerLoadData](../ContainerLoadData) 在填值时取用。

## 心智模型

`ElementLoadData` 是 [ContainerLoadData](../ContainerLoadData) 在 `InitializeReaders` 时为每个元素 `new` 出来的轻量槽位，对应保存侧 `ElementSaveData`。它继承自 `VariableLoadData`（同命名空间内的基类，负责把读流解码成 `SavedMemberType`/`MemberSaveId`/`Data`）。当 [LoadContext](../LoadContext) 调用 `containerLoadData.InitializeReaders`，它会按 `ElementCount` 为 value（以及 Dictionary 的 key）各 `new` 一个 `ElementLoadData(this, binaryReader)`，把读流交给基类。`Read()` 把字节流解成类型标记、成员 id 与 `Data`；稍后 `ContainerLoadData.FillObject` 阶段，针对 CustomStruct 元素先 `SetCustomStructData` 填入子 struct 的 `Target`，再统一 `GetDataToUse()` 把内部编号解析成真正的运行时引用——对象走 `Context.GetObjectWithId`、容器走 `GetContainerWithId`、字符串走 `GetStringWithId`。它只活在容器加载期间，是 `internal`，由 [ContainerLoadData](../ContainerLoadData) 持有数组，模组不可碰。它与 [ElementSaveData](../ElementSaveData) 跨保存/加载对称。

## 何时用 / 何时不要用

**理解层面使用：** 当你排查「为什么容器里混进了 null」「为什么 CustomStruct 元素没填好」「Dictionary 的 key 和 value 分别怎么解析」时。

**不要使用：**

- 不要在模组里 `new ElementLoadData(containerLoadData, reader)`——它仅由 [ContainerLoadData](../ContainerLoadData) 在 `InitializeReaders` 中构造。
- 不要在 `Read()` 之前调用 `GetDataToUse()`——此时 `Data` 还是默认状态，解析结果无意义。
- 不要对 CustomStruct 元素漏掉 `SetCustomStructData`——否则该分支 `GetDataToUse` 返回 null。

## 依赖图

- 构造来源：[ContainerLoadData](../ContainerLoadData) 在 `InitializeReaders` 中为每个 value/key `new ElementLoadData(this, binaryReader)`。
- 引用解析：基类 `GetDataToUse` 经 [LoadContext](../LoadContext) 的 `GetObjectWithId`/`GetContainerWithId`/`GetStringWithId` 把编号换成运行时值。
- 对称角色：保存侧对应 [ElementSaveData](../ElementSaveData)。
- 全局视角见 [存档系统架构](../../../architecture/save-system)。

## 风险段

- **元素指向的对象/容器尚未建好。** `GetDataToUse()` 通过 id 在 `Context` 里查找，若对应 `ObjectHeaderLoadData`/`ContainerHeaderLoadData` 还没 `CreateObject`，会拿到 null，导致容器里出现 null 元素。
- **CustomStruct 顺序错误。** 必须先 `SetCustomStructData` 再 `GetDataToUse`，否则 CustomStruct 分支返回 null。
- **Data 是归档编号，跨次加载无意义。** 不要缓存 `Data` 的 int 值到字段外，下次加载编号会重排。

## 成员说明

### 构造与持有

- `ElementLoadData(ContainerLoadData containerLoadData, IReader reader)`：基类 `Context` 取自 `containerLoadData.Context`，并把 `ContainerLoadData` 反向引用存为属性。
- `ContainerLoadData ContainerLoadData { get; }`：所属容器，便于回溯上下文与元素下标语义。

### 继承自 VariableLoadData 的关键能力

- `void Read()`：解一条字节读流 → `SavedMemberType` / `MemberSaveId` / `Data`。**何时调用：** [ContainerLoadData](../ContainerLoadData) 的 `Read` 阶段。
- `object GetDataToUse()`：把 `Data`（编号/id）解析为运行时值。**何时调用：** [ContainerLoadData](../ContainerLoadData) 的 `FillObject` 阶段。
- `void SetCustomStructData(object customStructObject)`：在 CustomStruct 分支时，把子 struct 的 `Target` 注入。**何时调用：** `FillObject` 前、针对 CustomStruct 元素。
- `SavedMemberType SavedMemberType { get; }` / `MemberTypeId MemberSaveId { get; }` / `object Data { get; }`：解码后的状态，供上层判定元素种类。

## 最小真实示例

`ElementLoadData` 由 [ContainerLoadData](../ContainerLoadData) 在 `InitializeReaders` 时创建。下面复刻引擎内部流程——整个加载由 `SaveManager` 驱动：

```csharp
// ContainerLoadData.InitializeReaders 为每个元素 new 一个 ElementLoadData 并交给基类读流：
ElementLoadData element = new ElementLoadData(containerLoadData, binaryReader);
element.Read();                          // 解出 SavedMemberType / Data（一个对象编号）
element.SetCustomStructData(structTarget); // 若是 CustomStruct，先注入子 struct 的 Target
object value = element.GetDataToUse();      // 解析为真正的运行时引用
// 整个加载由 SaveManager 驱动，根对象通常是 Campaign.Current：
LoadResult result = SaveManager.Load(saveName, driver);
```

注意：模组不直接持有 `ElementLoadData`；要让容器元素正确还原，正确做法是保证元素类型在 [SaveableTypeDefiner](../SaveableTypeDefiner) 中登记。

## 导航块

- 父级：[ContainerLoadData](../ContainerLoadData)
- 同级：[ElementSaveData](../ElementSaveData) · [ContainerLoadData](../ContainerLoadData)
- 相关：[LoadContext](../LoadContext) · [ObjectHeaderLoadData](../ObjectHeaderLoadData) · [SaveManager](../SaveManager) · [SaveableTypeDefiner](../SaveableTypeDefiner)

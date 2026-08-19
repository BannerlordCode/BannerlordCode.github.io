---
title: "VariableLoadData"
description: "加载侧「成员数据」的抽象基类：从字节流读出成员类型标记与原始值，并提供一个把内部 id 还原成运行实例（或原始值）的 GetDataToUse 解析器。"
---

# VariableLoadData

**命名空间：** `TaleWorlds.SaveSystem.Load`
**模块：** `TaleWorlds.SaveSystem`
**类型：** `internal abstract class VariableLoadData`
**基类/Base：** `System.Object`
**源文件路径/Source：** `TaleWorlds.SaveSystem/Load/VariableLoadData.cs`

## 一句话职责

在反序列化时，把一个成员条目的字节流解析成「类型 + 原始数据」，并提供把归档里的对象/容器/字符串 id 还原回真实运行实例的通用解析器。

## 心智模型

`VariableLoadData` 是加载侧所有成员数据的抽象基类：`MemberLoadData`（进而 `PropertyLoadData`、`FieldLoadData`、`ElementLoadData`）都继承自它。它处在加载管线的「最底层」——不关心成员是属性还是字段，只关心「这一笔数据是什么类型、值是什么、如何还原」。当 [LoadContext](../LoadContext) 反序列化一个 [ObjectLoadData](../ObjectLoadData) 的成员时，`Read()` 先从 `IReader` 读出一字节的 `SavedMemberType`（Object / Container / String / Enum / BasicType / CustomStruct），再按类型读出 `MemberSaveId` 与原始 `Data`（引用类型读出整数 id，值类型/字符串读出实际内容或 id）。拿到原始数据后，真正把「id」变回「对象」的是 `GetDataToUse()`：它根据 `SavedMemberType` 去 [LoadContext](../LoadContext) 的对象表 / 容器表 / 字符串表查 id，或把 Enum/BasicType 直接取值，或返回自定义 struct 的临时对象。换句话说，它是「读流」与「解析引用」的通用引擎，被所有具体成员节点复用。它与保存侧的 `VariableSaveData` 完全对称：一边把 id 还原成对象，一边把对象登记成 id。它是 `internal`，由引擎在加载阶段构造，模组不应触及。

## 何时用 / 何时不要用

**理解层面使用：** 当你排查「为什么引用类型加载后是 null」「为什么 Enum / 自定义 struct 加载错乱」「为什么字符串没还原」，或阅读成员数据解析源码时。

**不要使用：**

- 不要在模组运行时 `new VariableLoadData(...)` 或其子类——它们都是 `internal`，由 `LoadContext` 在反序列化成员条目时构造，构造参数是 `LoadContext` 与 `IReader`。
- 不要在保存阶段寻找 `VariableLoadData`——保存走 `VariableSaveData`，此时对象尚未重建。
- 不要在 [SaveableTypeDefiner](../SaveableTypeDefiner) 里访问它——它只负责字节级解析，与成员登记是两回事。

## 依赖图

- 上游构造者：[LoadContext](../LoadContext) 在反序列化对象图时，为每个成员条目 `new` 出它的子类（如 `PropertyLoadData`）。
- 引用解析：[LoadContext](../LoadContext) 的 `GetObjectWithId` / `GetContainerWithId` / `GetStringWithId` 支撑 `GetDataToUse` 的 id 查表。
- 类型 schema：[DefinitionContext](../DefinitionContext) 经 `TryGetTypeDefinition` 把 `SaveId` 解析成 `EnumDefinition` / `BasicTypeDefinition`。
- 对称角色：保存侧对应 [VariableSaveData](../VariableSaveData)。
- 子类承接：[MemberLoadData](../MemberLoadData) 在此之上加 `ObjectLoadData` 反向引用并回写对象。

## 风险段

- **归档损坏导致 id 查表返回 null。** `GetDataToUse` 对 Object/Container/String 依赖 `Context.GetObjectWithId/GetContainerWithId/GetStringWithId`，若 id 不存在会返回 `null`，回写时可能把 `null` 写进本不应为 null 的成员，且**不抛异常**。
- **Enum 解析失败静默兜底。** 若 `TypeDefinition` 为 `null`，`GetDataToUse` 对 Enum 直接返回原始字符串；若 `Enum.IsDefined` 既不成立又非 Flags，则解析结果为 `null`——与预期枚举值不符。
- **自定义 struct 必须先 SetCustomStructData。** `CustomStruct` 类型的值来自 `SetCustomStructData` 注入的临时对象；若加载顺序导致尚未注入，`GetDataToUse` 返回 `null`。
- **在错误阶段访问。** 它仅存活于 `SaveManager.Load` 的反序列化过程中；在加载完成后的正常游戏逻辑里访问已无意义。

## 成员说明

### 状态与构造

- `public LoadContext Context { get; private set; }`：加载上下文，序列化时凭此查类型定义与对象/容器/字符串 id 表。
- `public MemberTypeId MemberSaveId { get; private set; }`：本成员在类型 schema 中的 id（`TypeLevel` + `LocalSaveId`），由 `Read` 填充。
- `public SavedMemberType SavedMemberType { get; private set; }`：从流读出的成员类型（Object / Container / String / Enum / BasicType / CustomStruct）。
- `public object Data { get; private set; }`：原始读出值——引用类型为整数 id，值类型/Enum 为实际内容或字符串。
- `protected VariableLoadData(LoadContext context, IReader reader)`：唯一构造函数（引擎内部调用）。保存 `context` 与读指针 `reader`。**何时调用**：子类（`PropertyLoadData` 等）构造时经 `MemberLoadData` 链式上传。

### 解析核心

- `public void Read()`：从 `IReader` 解析一笔成员数据。**副作用**：填充 `SavedMemberType`、`MemberSaveId`、`Data`；对 Enum/BasicType 还会经 `DefinitionContext.TryGetTypeDefinition` 取 `TypeDefinition` 并（Enum）即时解析出字符串值。**何时调用**：构造后、回写前，由框架统一调度。
- `public object GetDataToUse()`：把原始 `Data` 还原成可写入的值。**副作用**：无副作用，纯解析；Object/Container/String 走 `Context` 查表，Enum 经 `Enum.Parse`，BasicType 直接返回，`CustomStruct` 返回 `_customStructObject`。**何时调用**：子类（如 `PropertyLoadData.FillObject`）回写前调用以获取待写入值。
- `public void SetCustomStructData(object customStructObject)`：为 `CustomStruct` 类型注入已重建的 struct 临时对象。**副作用**：设置 `_customStructObject`，供 `GetDataToUse` 在 `CustomStruct` 分支返回。**何时调用**：加载顺序推进、struct 子节点重建完成后。

## 最小真实示例

`VariableLoadData` 是 `internal abstract`，由 `LoadContext` 在反序列化时为成员条目构造子类。下面复刻引擎内部的「读—解析」核心；被重建的根对象就是 `Campaign.Current`：

```csharp
// LoadContext 重建 Campaign.Current 时，对每个成员条目构造 VariableLoadData 子类并解析
ObjectLoadData objectLoadData = context.GetObjectWithId(objectId);
VariableLoadData loadData = new PropertyLoadData(objectLoadData, reader); // 子类化以可实例化
loadData.Read();                       // 读 SavedMemberType、MemberSaveId 与原始 Data
object resolved = loadData.GetDataToUse(); // 把 Object/Container/String id 还原为运行实例
bool ok = Campaign.Current != null;    // 目标对象已重建在 Campaign.Current 上
```

注意：模组不应自己 `new VariableLoadData`；要让成员数据正确参与解析，正确做法是写 [SaveableTypeDefiner](../SaveableTypeDefiner) 并确保类型已在 [DefinitionContext](../DefinitionContext) 登记。

## 导航块

- 父级：[存档系统 API 索引](../)
- 同级：[MemberLoadData](../MemberLoadData) · [PropertyLoadData](../PropertyLoadData) · [VariableSaveData](../VariableSaveData)
- 相关：[LoadContext](../LoadContext) · [ObjectLoadData](../ObjectLoadData) · [LoadResult](../LoadResult) · [DefinitionContext](../DefinitionContext) · [../../../architecture/save-system](../../../architecture/save-system)

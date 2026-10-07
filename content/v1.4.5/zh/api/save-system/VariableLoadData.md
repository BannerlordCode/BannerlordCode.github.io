---
title: "VariableLoadData"
description: "每一个存档槽位的读侧基类：先按第一字节分派六条路线把值读成原始数据，再在 GetDataToUse 里把它翻译成活对象。"
---

# VariableLoadData

**Namespace:** `TaleWorlds.SaveSystem.Load`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `internal abstract class VariableLoadData`
**Base:** 无
**File:** `TaleWorlds.SaveSystem.Load/VariableLoadData.cs`

## 概述

[VariableSaveData](../VariableSaveData) 的读侧对偶。它刻意拆成**两趟**：`Read()` 只把字节读成原始数据——第一字节取出 [SavedMemberType](../SavedMemberType) 标签，按标签读一个 int 或一段文本（`:31-77`）；`GetDataToUse()` 才把这些原始数据翻译成能赋给字段的值——按编号去对象表/容器表/字符串表取实例，或把文本解析成枚举（`:84-132`）。这种「先读后译」的结构是读档能并行铺开的前提：所有槽位可以同时 `Read()`，等对象全部就位后再统一 `GetDataToUse()`。

## 心智模型

把它想成**先验货、后上架**：第一趟把箱子拆开、把编号抄下来（不做任何查找），第二趟拿着编号去仓库把实物取出来。推论有四条：

1. **`Read()` 的六条分支里有三条读的东西完全一样。** Object（`:41`）、Container（`:45`）、String（`:49`）三条都是 `_reader.ReadInt()`——**同一个 4 字节，含义完全由标签决定**。所以标签一旦错位，读侧不会报错，只会把编号当错的东西解释。
2. **枚举与基础类型是自描述的，所以它们的容错行为不一致。** 两条分支都先 `SaveId.ReadSaveIdFrom(_reader)` 再 `TryGetTypeDefinition`（`:53-54`、`:68-69`）。枚举那边 `:56` 的硬转结果允许为 null，随后 `enumDefinition?.Resolver != null` 用空值条件判掉（`:57`），落空就 `Data = text`（`:63`）——**优雅退化成原始字符串**。基础类型那边 `:70` 硬转后**没有判空**，`:71` 立刻 `.Serializer.Deserialize` ——定义缺失就是一次 `NullReferenceException`。**同一个方法里两种容错风格。**
3. **`Tuple` 槽位在读侧同样不存在。** `Read()` 的分支从 `:39` 排到 `:76`、`GetDataToUse()` 从 `:87` 排到 `:131`，**没有任何一条处理 `SavedMemberType.Tuple`**。这和写侧不产出该标签是同一个事实的两端——那个序号是永久保留的空位。
4. **改名或删除枚举成员会让值静默变 null。** `GetDataToUse` 的枚举分支在 `:118` 判 `Enum.IsDefined(type, Data) || enumDefinition.HasFlags`，成立才 `Enum.Parse`；**不成立时 `result` 保持 null 并被 `:132` 返回**。所以旧档里的枚举名如果在新版本里不存在，读档不报错、字段变 null，除非那个枚举声明了 `Flags`。

## 如何使用

### 怎么拿到它

**mod 拿不到。** `internal abstract`，构造器 `protected VariableLoadData(LoadContext context, IReader reader)`（`:25`）。三个子类在读档侧：[MemberLoadData](../MemberLoadData)（字段/属性）与 [ElementLoadData](../ElementLoadData)（容器元素）。它们由 [ObjectLoadData](../ObjectLoadData) / [ContainerLoadData](../ContainerLoadData) 在 [LoadContext](../LoadContext) 的并行填值阶段驱动。**要影响读档结果，改的是类型定义、枚举成员名或 resolver，不是这个类。**

### 最小可运行片段

```csharp
// VariableLoadData 是 internal；这里演示它的两趟协议与 -1 约定
using TaleWorlds.SaveSystem;
using TaleWorlds.SaveSystem.Definition;

// 第一趟：字节 → 原始数据。Object / Container / String 读的都是同一个 4 字节。
//   null 引用在存档里 = 标签 Object + 编号 -1

// 第二趟：原始数据 → 活对象。编号 -1 时 LoadContext 三个查询都返回 null
//   GetObjectWithId(-1)    → null（LoadContext.cs:319-326）
//   GetContainerWithId(-1) → null（:329-336）
//   GetStringWithId(-1)    → null（:339-346）

// 标签的数值就是线上字节，ordinal 不可重排
Debug.Print("Object=" + (int)SavedMemberType.Object + " Container=" + (int)SavedMemberType.Container
          + " String=" + (int)SavedMemberType.String + " Tuple=" + (int)SavedMemberType.Tuple, 0);
```

### 用它最容易踩的一条

**在存档存活期间重命名或删除一个枚举成员，读档不会报错，那个字段会变成 null。** 枚举值是以**名字字符串**存进存档的（写侧 `VariableSaveData.cs:113` 的 `writer.WriteString(Value.ToString())`），读侧 `GetDataToUse` 在 `:118` 先用 `Enum.IsDefined` 判一次，不通过且枚举不是 `Flags` 时就**什么都不赋值**，`:132` 把 null 返回出去。所以改名等于「让旧档里所有这个字段静默归零」。**枚举成员名和字段名一样，是存档协议的一部分。**

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Context` | `public LoadContext Context { get; private set; }` | 读档上下文（`:27`）。`GetDataToUse` 的对象/容器/字符串三个分支都经它反查（`:89`、`:97`、`:106`）。**它的 `Driver` 属性在本类里从未被用**——字节已经由 [LoadData](../LoadData) 带来了。 |
| `MemberSaveId` | `public MemberTypeId MemberSaveId { get; private set; }` | 槽位身份，在 `Read()` 里用对象初始化器从 1 字节 + 1 短整数拼出（`:34-38`）。**用来把这个槽位对回是哪个字段/属性**；容器元素侧仍是 `Invalid`（写侧就写的 0 与 -1）。 |
| `SavedMemberType` | `public SavedMemberType SavedMemberType { get; private set; }` | 路由标签，第一字节（`:33`）。**读侧没有 `Tuple` 分支**，所以该 ordinal 落到 `Read()` 末尾什么都不做、`Data` 留 null。 |
| `Data` | `public object Data { get; private set; }` | 第一趟的原始载荷：对象/容器/字符串/结构体是 `int` 编号、枚举是**字符串本体**、基础类型是反序列化出来的值。**含义随标签变**，第二趟之前不要当业务值用。 |
| `_typeDefinition` / `_saveId` | `private TypeDefinitionBase _typeDefinition;`（`:11`）/ `private SaveId _saveId;`（`:13`） | 只在枚举与基础类型分支被填（`:53-54`、`:68-69`）。**其余四条分支这两个字段始终是 null**，`GetDataToUse` 的枚举分支因此有 `:110` 的 null 判断。 |
| `_customStructObject` | `private object _customStructObject;`（`:15`） | 结构体槽位最终返回的对象，由外部经 `SetCustomStructData`（`:79`）注入。`GetDataToUse` 的 CustomStruct 分支直接返回它（`:130`）——**读侧不自己解析结构体**。 |
| `Read` | `public void Read()` | `:31-77`。第一趟。第一字节取标签（`:33`）、两字节成员身份（`:34-38`），然后六分支：Object `:41`、Container `:45`、String `:49`、Enum `:53-64`、BasicType `:68-71`、CustomStruct `:75`。**三条 int 分支字节相同，只有标签区分。** |
| `GetDataToUse` | `public object GetDataToUse()` | `:84-132`。第二趟。对象 `:89`（`GetObjectWithId((int)Data)`，返回 null 就给 null）、容器 `:97`、字符串 `:106`、枚举 `:108-122`、基础类型 `:126`（直接返回 `Data`）、结构体 `:130`（返回 `_customStructObject`），最后 `:132` 统一返回 `result`。 |
| `SetCustomStructData` | `public void SetCustomStructData(object customStructObject)` | `:79`。把别处解析好的结构体实例塞进来，供 `GetDataToUse` 取用。**谁调用它决定了结构体成员什么时候能被读到**——这是读档顺序敏感的另一个点。 |
| 枚举分支的两段容错 | `Read()` 的 `:56-64` 与 `GetDataToUse()` 的 `:110-121` | `Read` 里硬转后用 `?.` 判 Resolver，定义缺失就保留字符串（`:63`）；`GetDataToUse` 里 `:110` 先判 `_typeDefinition == null` 则返回字符串，`:118` 再判 `Enum.IsDefined(type, Data) || enumDefinition.HasFlags`，**不成立时 `result` 留 null**。 |

## 真实示例

第一趟的六分支（`TaleWorlds.SaveSystem.Load/VariableLoadData.cs:33-76`）：

```csharp
SavedMemberType = (SavedMemberType)_reader.ReadByte();
MemberSaveId = new MemberTypeId
{
    TypeLevel = _reader.ReadByte(),
    LocalSaveId = _reader.ReadShort()
};
if (SavedMemberType == SavedMemberType.Object)            { Data = _reader.ReadInt(); }   // :41
else if (SavedMemberType == SavedMemberType.Container)    { Data = _reader.ReadInt(); }   // :45  与上者字节相同
else if (SavedMemberType == SavedMemberType.String)       { Data = _reader.ReadInt(); }   // :49  与上两者字节相同
else if (SavedMemberType == SavedMemberType.Enum)
{
    _saveId = SaveId.ReadSaveIdFrom(_reader);
    _typeDefinition = Context.DefinitionContext.TryGetTypeDefinition(_saveId);
    string text = _reader.ReadString();
    EnumDefinition enumDefinition = (EnumDefinition)_typeDefinition;
    if (enumDefinition?.Resolver != null) { Data = enumDefinition.Resolver.ResolveObject(text); }
    else                                 { Data = text; }        // 定义缺失时优雅退化成字符串
}
else if (SavedMemberType == SavedMemberType.BasicType)
{
    _saveId = SaveId.ReadSaveIdFrom(_reader);
    _typeDefinition = Context.DefinitionContext.TryGetTypeDefinition(_saveId);
    BasicTypeDefinition basicTypeDefinition = (BasicTypeDefinition)_typeDefinition;   // 无判空
    Data = basicTypeDefinition.Serializer.Deserialize(_reader);                      // :71 可能 NRE
}
else if (SavedMemberType == SavedMemberType.CustomStruct) { Data = _reader.ReadInt(); }  // :75
```

第二趟的枚举分支——改名即静默 null（`:108-122`）：

```csharp
else if (SavedMemberType == SavedMemberType.Enum)
{
    if (_typeDefinition == null)
    {
        result = (string)Data;          // 定义没了就把原始字符串交出去
    }
    else
    {
        EnumDefinition enumDefinition = (EnumDefinition)_typeDefinition;
        Type type = _typeDefinition.Type;
        if (Enum.IsDefined(type, Data) || enumDefinition.HasFlags)
        {
            result = Enum.Parse(type, (string)Data);
        }
        // 不成立时 result 保持 null，直接被 return 出去
    }
}
```

mod 视角的对照实验——改名与 Flags 的差别：

```csharp
// 枚举改名 / 删成员，旧档里该字段读回来是 null，且不抛异常
// 唯一例外：枚举带 [Flags] 时，:118 的 HasFlags 让未知名字也照样 Parse
Debug.Print("枚举成员名是存档协议的一部分：改名 = 旧档该字段静默变 null", 0);
Debug.Print("带 Flags 的枚举是唯一的例外分支", 0);
Debug.Print("Tuple(3) 在 Read() 和 GetDataToUse() 里都没有分支，是写读两侧共同的保留空位", 0);
```

## 依赖关系

- 写侧对偶：[VariableSaveData](../VariableSaveData)（同一组标签的六条写出分支）、[SavedMemberType](../SavedMemberType)
- 三个子类：[MemberLoadData](../MemberLoadData)（字段/属性）、[ElementLoadData](../ElementLoadData)（容器元素），以及结构体实例的注入方
- 驱动者：[LoadContext](../LoadContext)（三个反查询 `GetObjectWithId` / `GetContainerWithId` / `GetStringWithId`，-1 一律给 null）
- 类型定义：[DefinitionContext](../DefinitionContext)、[SaveId](../SaveId)、[EnumDefinition](../EnumDefinition)、[BasicTypeDefinition](../BasicTypeDefinition)
- 枚举改名兼容：[IEnumResolver](../IEnumResolver)（`Read()` 里 `enumDefinition.Resolver.ResolveObject(text)` 的实际入口）
- 对象兼容：[IObjectResolver](../IObjectResolver)、[IConflictResolver](../IConflictResolver)
- 流与归档：[LoadData](../LoadData)、[ArchiveDeserializer](../ArchiveDeserializer)、[SaveEntryFolder](../SaveEntryFolder)
- 成员身份：[MemberTypeId](../MemberTypeId)
- 体系全貌：../../../architecture/save-system
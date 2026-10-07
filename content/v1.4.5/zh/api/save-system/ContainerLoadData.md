---
title: "ContainerLoadData"
description: "读档时单个容器的数据容器：先按 Struct 扩展名去重出子结构体名，再按四个容器分支把元素填回列表、字典、数组或队列。"
---

# ContainerLoadData

**Namespace:** `TaleWorlds.SaveSystem.Load`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `internal class ContainerLoadData`
**Base:** 无
**File:** `TaleWorlds.SaveSystem.Load/ContainerLoadData.cs`

## 概述

读档填容器数据时，[LoadContext](../LoadContext) 为每个容器条目造一个 `ContainerLoadData`，同样走四步：`InitializeReaders` → `FillCreatedObject` → `Read` → `FillObject`（`LoadContext.cs` 的 `Load Container Datas` 阶段）。它把元素铺成 `_keys` / `_values` 两个等长数组（`:42-43`），**只有字典形状才填 `_keys`**（`:73`），与写侧 [ContainerSaveData](../ContainerSaveData) 的 `:84-87` 完全对称。`FillObject` 按容器形状分四个分支把值装回 `Target`：列表族（`:126`）、字典（`:140`）、数组（`:166`）、队列（`:180`）。所有结构体元素都通过 `SetCustomStructData` 注入到 [ElementLoadData](../ElementLoadData) 槽位里。

## 心智模型

把它想成**按箱型分拣的入库台**：同一条流水线来四种箱型，就用四套不同的装法；箱子里凡是结构体的小盒，得先从小盒清单里取，取不到就**现造一个默认的空盒**。推论有四条：

1. **子结构体名字在读侧会去重。** `GetChildStructNames` 遍历子 folder，只收 `SaveFolderExtension.Struct` 的，并且用 `!list.Contains(childFolder.FolderId)` **按 FolderId 去重**（`:51`）。这正是写侧 `ShouldSaveStruct`（`ContainerSaveData.cs:194`）那套「同类型默认结构体只存一份」的**读侧镜像**——写侧省掉的那几份，在这里靠去重后的单份恢复。
2. **取不到子结构体就现造一个默认实例。** 五个分支里是同一个模式：`!_childStructs.TryGetValue(key, out var value) ? GetDefaultObject(_saveId, Context) : value.Target`（`:134`、`:149`、`:156`、`:174`、`:188`），而 `GetDefaultObject` 最终是 `Activator.CreateInstance(((StructDefinition)typeDefinitionBase).Type)`（`:202`）。**所以读档造结构体用的是会跑构造函数的那条路**，与 [ObjectHeaderLoadData](../ObjectHeaderLoadData) 读普通对象时的 `GetUninitializedObject` 正好相反。
3. **`GetDefaultObject` 有一个 `getValueId` 开关。** 签名 `GetDefaultObject(SaveId saveId, LoadContext context, bool getValueId = false)`（`:197`）——字典值侧那处调用显式传 `getValueId: true`（`:156`），其余传默认 false。**字典的键侧与值侧取默认结构体时用的身份来源不同**，因为要分别对上 `ContainerSaveId.KeyId` 与 `ValueId`。
4. **四个形状分支有三种不同的空值风格，而且队列用逐元素反射。** 列表族用 `obj?.Add(dataToUse)`（`:138`，**空容器静默跳过**）；字典用显式 `if (dictionary != null && dataToUse2 != null)` 才 `Add`（`:161-163`，**键和值都判**）；数组**完全空判**直接 `obj5.SetValue(dataToUse4, i)`（`:178`，`Target` 为 null 就是空引用）；队列既不判空，也**在循环体内每次重新 `collection.GetType().GetMethod("Enqueue")` 反射一次再 Invoke**（`:192`）——n 个元素就是 n 次方法查找。

## 如何使用

### 怎么拿到它

**mod 拿不到。** `internal`，构造器 `ContainerLoadData(ContainerHeaderLoadData headerLoadData)`（`:35`）由 [LoadContext](../LoadContext) 在容器数据阶段构造。它的四个公开属性 `Id` / `Target` / `Context` / `TypeDefinition`（`:25`、`:27`、`:29`、`:31`）**全是转发给 `ContainerHeaderLoadData` 的表达式体属性**，本类自己不留副本。要影响读档结果，改的是**容器字段的声明类型**与**元素类型的定义**。

### 最小可运行片段

```csharp
// ContainerLoadData 是 internal；这里演示它的形状分支与默认实例回填
using TaleWorlds.SaveSystem;
using TaleWorlds.SaveSystem.Definition;

// 四个形状对应四个分支，键值两栏只有字典会填
Debug.Print("List / CustomList / CustomReadOnlyList → :126 一个分支", 0);
Debug.Print("Dictionary → :140，只有它填 _keys", 0);
Debug.Print("Array → :166，Queue → :180", 0);

// 子结构体取不到时用 Activator.CreateInstance 现造默认实例（:202）——这条路径会跑构造函数
Debug.Print("普通对象读档用 GetUninitializedObject（不跑 ctor），", 0);
Debug.Print("结构体默认实例用 Activator.CreateInstance（跑 ctor）—— 两条路相反", 0);
```

### 用它最容易踩的一条

**同一容器里多个「默认结构体元素」，读档时只有第一个拿到真实数据，其余拿到的是新建的空实例。** 这是**设计如此**，不是 bug：写侧 `ShouldSaveStruct` 只为每种结构体类型存一份（`ContainerSaveData.cs:194-212`），读侧 `GetChildStructNames` 靠 FolderId 去重只认一份（`:51`），剩下的元素槽位在 `_childStructs` 里查不到，就走 `GetDefaultObject(...)` 现造（`:134` 等五处）。**前提是你的结构体正确实现了 [ISavedStruct](../ISavedStruct) 的 `IsDefault()`**——返回 false 的结构体不会被写侧省略，也就不会触发这条回填。症状是「容器里前几个元素有值，后面全是默认值」，且没有任何报错。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `_keys` / `_values` | `private ElementLoadData[] _keys;`（`:19`）/ `private ElementLoadData[] _values;`（`:21`） | 两栏等长数组，构造时按 `_elementCount` 分配（`:42-43`）。**非字典形状的 `_keys` 整排为 null**，但 `GetDataSize` 之类的逻辑仍按字典条件才用它们。 |
| `_childStructs` | `private Dictionary<int, ObjectLoadData> _childStructs;` | 按**元素下标**索引的子结构体数据。`FillCreatedObject`（`:91`）与 `Read`（`:107`）遍历它的值；`FillObject` 用下标 `TryGetValue` 取（`:134` 等）。**这是「一份结构体数据被多个元素共享」的落点。** |
| `_elementCount` | `private int _elementCount;` | 元素总数，写侧由 `ContainerSaveData.GetElementCount()` 决定（`ContainerSaveData.cs:343`）。`InitializeReaders` 按它循环建槽位（`:68`），`FillObject` 按它循环装配（`:124`）。 |
| `_containerType` | `private ContainerType _containerType;` | 四个分支的判据。**从容器头转发**来的，所以与写侧判定的形状来自同一次 `IsContainer`——两边形状不一致会在读档时走错分支。 |
| `Id` / `Target` / `Context` / `TypeDefinition` | `public int Id => ContainerHeaderLoadData.Id;`（`:25`）等 | **四个表达式体转发属性**（`:25`、`:27`、`:29`、`:31`），本类不持有副本。`Target` 是被填值的容器实例，`FillObject` 全程往它身上写。 |
| `ContainerHeaderLoadData` | `public ContainerHeaderLoadData ContainerHeaderLoadData { get; private set; }` | `:33`，上面四个转发属性的唯一后端。**改名不会**——这是属性名与字段名相同的一个陷阱式设计。 |
| `GetChildStructNames` | `private FolderId[] GetChildStructNames(SaveEntryFolder saveEntryFolder)` | `:46-57`。遍历子 folder，**只收 `SaveFolderExtension.Struct` 且 FolderId 未重复**的（`:51`）。返回数组供 `InitializeReaders` 建 `_childStructs`。**这就是写侧「同类型默认结构体只存一份」的读侧落点。** |
| `InitializeReaders` | `public void InitializeReaders(SaveEntryFolder saveEntryFolder)` | `:59-87`。先按去重后的子结构体名建 `_childStructs`（`:62`），再按 `_elementCount` 建元素槽位（`:68`），**仅字典形状额外建 `_keys[i]`**（`:73`），最后对子结构体各自 `InitializeReaders`（`:80`）。 |
| `FillCreatedObject` | `public void FillCreatedObject()` | `:89-95`。只对 `_childStructs.Values` 建壳（`:91`）。对应写侧 `ContainerSaveData.CollectStructs`。 |
| `Read` | `public void Read()` | `:97-111`。**先 `FillObject` 每个子结构体**（`:100`），再逐元素 `Read`，字典时键和值都读（`:102`），最后子结构体集合各 `Read` 一次（`:107`）。 |
| `FillObject` | `public void FillObject()` | `:118-195`。四个形状分支：列表族 `:126-139`、字典 `:140-164`、数组 `:166-179`、队列 `:180-193`。每个分支都先把结构体元素的实例 `SetCustomStructData` 注入槽位（`:135`、`:150`、`:157`、`:175`、`:189`），再把普通值写进容器。**空值风格三种不同**：列表 `?.`（`:138`）、字典显式双判（`:161`）、数组无判（`:178`）、队列无判且逐元素反射（`:192`）。 |
| `GetDefaultObject` | `private static object GetDefaultObject(SaveId saveId, LoadContext context, bool getValueId = false)` | `:197-203`。`_childStructs` 查不到时的兜底：按身份取 `StructDefinition` 再 `Activator.CreateInstance(...)`（`:202`）。**`getValueId` 只在字典值侧那处传 true**（`:156`）。**这条路径会调用结构体的构造函数。** |
| `GetAssemblyByName` | `private static Assembly GetAssemblyByName(string name)` | `:113-116`。`AppDomain.CurrentDomain.GetAssemblies().SingleOrDefault(...)`（`:115`）——**用的是 `SingleOrDefault`，同名程序集存在两份就会抛 `InvalidOperationException`**。用于把存档里的程序集名解析成 `Assembly`，读档期的真实失败点之一。 |

## 真实示例

写读两侧的去重镜像——写侧省、读侧去重（`ContainerLoadData.cs:46-57` 对 `ContainerSaveData.cs:194-212`）：

```csharp
// 读侧：按 FolderId 去重，只留一份 Struct 子 folder 的名字
private FolderId[] GetChildStructNames(SaveEntryFolder saveEntryFolder)
{
    List<FolderId> list = new List<FolderId>();
    foreach (SaveEntryFolder childFolder in saveEntryFolder.ChildFolders)
    {
        if (childFolder.FolderId.Extension == SaveFolderExtension.Struct && !list.Contains(childFolder.FolderId))
        {
            list.Add(childFolder.FolderId);
        }
    }
    return list.ToArray();
}
```

字典分支的键值分别取默认实例（`ContainerLoadData.cs:143-161`，节选）：

```csharp
IDictionary dictionary = (IDictionary)Target;
ElementLoadData elementLoadData2 = _keys[i];
ElementLoadData elementLoadData3 = _values[i];
if (elementLoadData2.SavedMemberType == SavedMemberType.CustomStruct)
{
    object obj3 = ((!_childStructs.TryGetValue(key2, out var value2)) ? GetDefaultObject(_saveId, Context) : value2.Target);
    elementLoadData2.SetCustomStructData(obj3);          // 键侧：默认身份
}
if (elementLoadData3.SavedMemberType == SavedMemberType.CustomStruct)
{
    object obj4 = ((!_childStructs.TryGetValue(key3, out var value3)) ? GetDefaultObject(_saveId, Context, getValueId: true) : value3.Target);
    elementLoadData3.SetCustomStructData(obj4);          // 值侧：getValueId = true
}
// 只有字典有显式的双判空
if (dictionary != null && dataToUse2 != null) { dictionary.Add(dataToUse2, dataToUse3); }
// 列表族用 ?. —— Target 为 null 时静默跳过
// obj?.Add(dataToUse);                       ContainerLoadData.cs:138
// 数组无判空，队列无判空且逐元素反射
// obj5.SetValue(dataToUse4, i);                                    :178
// collection.GetType().GetMethod("Enqueue").Invoke(...);           :192
```

mod 视角的对照实验：

```csharp
// 队列的入队是逐元素反射：n 个元素 → n 次 GetMethod("Enqueue") + n 次 Invoke
// 列表是一次 Add，数组是一次 SetValue，字典是一次 Add
// 所以「大批量 Queue<T> 字段」在读档侧的成本形状和其余三种容器不同。
Debug.Print("四个形状的装配成本不同：队列 = 每元素一次方法查找 + 一次 Invoke", 0);

```csharp
// 一个 List<ISavedStruct 的默认结构体>，10 个元素：
//   写侧：只产出 1 份结构体数据（ContainerSaveData.ShouldSaveStruct）
//   读侧：去重后只认 1 份，其余 9 个元素走 GetDefaultObject → 新建空实例
// 结果：第 1 个元素有真实数据，2..10 全是默认值 —— 这是协议的必然结果，不是丢数据。
Debug.Print("ISavedStruct.IsDefault() 返回 true 是这条路径的必要条件", 0);
Debug.Print("返回 false 的结构体不会被写侧省略，也就不会命中这条回填", 0);
```

## 依赖关系

- 驱动者：[LoadContext](../LoadContext)（`Load Container Datas` 阶段并行执行四步）
- 头部：[ContainerHeaderLoadData](../ContainerHeaderLoadData)（四个转发属性的唯一后端）
- 元素槽位：[ElementLoadData](../ElementLoadData)、[VariableLoadData](../VariableLoadData)（`SavedMemberType` 与 `SetCustomStructData` 的实现）
- 子结构体数据：[ObjectLoadData](../ObjectLoadData)
- 去重契约：[ISavedStruct](../ISavedStruct)（写侧 `ShouldSaveStruct` 与读侧 `GetChildStructNames` 是一对）
- 形状：[ContainerType](../ContainerType)、[ContainerDefinition](../ContainerDefinition)、[SaveId](../SaveId)
- 字节来源：[ArchiveDeserializer](../ArchiveDeserializer)、[SaveEntryFolder](../SaveEntryFolder)、[FolderId](../FolderId)、[SaveFolderExtension](../SaveFolderExtension)
- 写侧对偶：[ContainerSaveData](../ContainerSaveData)（键值下标 `:84-87` 与本类 `:73` 对称）
- 读档编排：[ObjectHeaderLoadData](../ObjectHeaderLoadData)（注意它与普通对象建壳走的是相反的实例化路径）
- 体系全貌：../../../architecture/save-system
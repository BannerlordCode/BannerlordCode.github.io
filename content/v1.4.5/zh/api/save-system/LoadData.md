---
title: "LoadData"
description: "读档输入包：只装两样东西——元数据与四段字节的 GameData，除此之外没有任何东西。"
---

# LoadData

**Namespace:** `TaleWorlds.SaveSystem`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public class LoadData`
**Base:** 无
**File:** `TaleWorlds.SaveSystem/LoadData.cs`

## 概述

驱动读出来的东西被装进一个 `LoadData`，交给 [LoadContext](../LoadContext) 的 `Load`。它只有两个属性：`MetaData`（游戏状态元数据，见 [MetaData](../MetaData)）与 `GameData`（四段字节，见 [GameData](../GameData)），构造器把两者原样存下（`:9-13`）。整个类 14 行、无方法、无校验。**它是「驱动」与「读档编排」之间的唯一边界**——正因为它这么薄，[LoadContext](../LoadContext) 才能完全不持有驱动就能完成读档。

## 心智模型

把它想成**从柜台领到的档案袋**：袋子里只有一张登记表（元数据）和一叠分好段的纸（四段字节），没有别的。推论有三条：

1. **它是纯数据载体，构造后不可变。** 两个属性都是 `{ get; private set; }`，构造器一次性赋完（`:11-12`），**类里没有任何方法**——所以它既不能被校验，也不能被重新包装。要换内容只能再造一个。
2. **它把「驱动」与「读档」彻底解耦。** [LoadContext](../LoadContext) 拿到 `LoadData` 之后全程只从它取字节，`Driver` 属性虽然存着却**在 `Load` 里一次都没用**。所以**实现一个自定义 `ISaveDriver`（见 [ISaveDriver](../ISaveDriver)）不需要给读档侧提供任何额外接口**——只要能把字节和元数据凑成这个袋子就够。
3. **`MetaData` 与 `GameData` 的生命周期不同。** 元数据在读档开始时就被读走，用来定 `OperatingVersion`（`SaveManager.cs:151`）。它还会在初始化回调里被反复传给每个回调方法（`LoadCallbackInitializator.cs:48`）。字节源则被 [LoadContext](../LoadContext) 与 [ArchiveDeserializer](../ArchiveDeserializer) 逐段消费。**两者都没有被复制，全是引用传递。**

## 如何使用

### 怎么拿到它

**通常拿不到——它由驱动造、由 [SaveManager](../SaveManager) 转交。** 三个位置能看到它：

- 驱动侧：`ISaveDriver.Load(string saveName)` 的返回值，实现者自己 `new LoadData(metaData, gameData)`。
- 读档编排侧：[LoadContext](../LoadContext) 的 `Load` 方法接收它作为形参（`LoadContext.cs:54`）。静态方法 `CreateLoadData` 里则读 `ObjectData[i]`（`LoadContext.cs:43`）。
- 回调侧：[LoadCallbackInitializator](../LoadCallbackInitializator) 构造时存下（`:20`），只为了取 `MetaData` 与再读一次字节。

**自定义驱动时你会亲手造它**（见 [ISaveDriver](../ISaveDriver) 页的示例）。

### 最小可运行片段

```csharp
using TaleWorlds.SaveSystem;

// 造一个读档输入包：两样东西，元数据 + 四段字节
LoadData loadData = new LoadData(gameStateMetaData, gameData);

// 交给 LoadContext（正规路径由 SaveManager 做）
// bool ok = loadContext.Load(loadData, loadAsLateInitialize);

// 读档期间这两个引用全程有效，不需要复制
MetaData md = loadData.MetaData;
GameData gd = loadData.GameData;
Debug.Print("对象段数量 = " + gd.ObjectData.Length + "，容器段数量 = " + gd.ContainerData.Length, 0);
Debug.Print("字节总量 = " + gd.TotalSize, 0);

// 元数据在读档一开始就被用来定版本
Debug.Print("运行版本 = " + md.GetApplicationVersion(), 0);
```

### 用它最容易踩的一条

**`GameData` 为 null 时不会有任何提示，只会在读档深处炸。** 本类对两个形参**不做任何校验**（`:11-12` 直接赋值）。而 [LoadContext](../LoadContext) 的 `Load` 第一件事就是 `loadData.GameData.Header`（`LoadContext.cs:63`），随后 `_objectCount = binaryReader.ReadInt()`。所以一个 `new LoadData(metaData, null)` 的症状是**空引用发生在 LoadContext 的第一行**，而不是「LoadData 拒绝了非法输入」。自定义驱动时如果 `CreateFrom` 失败了，务必自己判空再构造。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `MetaData` | `public MetaData MetaData { get; private set; }` | 游戏状态元数据（见 [MetaData](../MetaData)）。用途有三：定 `OperatingVersion`、传给初始化回调当第一个参数、以及 [LoadContext](../LoadContext) 的 `AdvancedResolveObject` 形参。**它不在 `GameData` 里**，所以读档要拿元数据不必解析字节。 |
| `GameData` | `public GameData GameData { get; private set; }` | 四段字节（Header / Strings / ObjectData / ContainerData）。[LoadContext](../LoadContext) 的全部字节都从这里来：Header 读三个计数、Strings 读字符串表、ObjectData 逐对象反序列化、ContainerData 逐容器。 |
| 构造器 | `public LoadData(MetaData metaData, GameData gameData)` | `:9-13`。两个形参原样赋给同名属性，**没有 null 检查、没有互操作性检查**。传 null 不报错，只把问题推迟给消费方。 |

## 真实示例

全文（`TaleWorlds.SaveSystem/LoadData.cs:3-14`，去掉空行后就这么长）：

```csharp
public class LoadData
{
    public MetaData MetaData { get; private set; }

    public GameData GameData { get; private set; }

    public LoadData(MetaData metaData, GameData gameData)
    {
        MetaData = metaData;
        GameData = gameData;
    }
}
```

读档侧怎么用它（`TaleWorlds.SaveSystem.Load/LoadContext.cs:54` 起，节选）：

```csharp
public bool Load(LoadData loadData, bool loadAsLateInitialize)
{
    // ...
    ArchiveDeserializer archiveDeserializer = new ArchiveDeserializer();
    archiveDeserializer.LoadFrom(loadData.GameData.Header);          // ← 第一处取字节
    SaveEntryFolder headerRootFolder = archiveDeserializer.RootFolder;
    BinaryReader binaryReader = headerRootFolder.GetEntry(new EntryId(-1, SaveFolderExtension.Config)).GetBinaryReader();
    _objectCount = binaryReader.ReadInt();
    // ...
}
```

自定义驱动造它的形状（配合 [ISaveDriver](../ISaveDriver)）：

```csharp
public LoadData Load(string saveName)
{
    byte[] raw = File.ReadAllBytes(saveName);
    GameData gd = GameData.CreateFrom(raw);              // 见 GameData 页：与 Write/Read 的顺序不同
    MetaData md = ReadMetaData(saveName);                // 走独立的 LoadMetaData 通道
    if (gd == null) { /* 自己判空，本类不会替你判 */ }
    return new LoadData(md, gd);
}
```

mod 视角的对照实验：

```csharp
// 两个属性都是引用传递，读档全程不复制：
//   MetaData  → OperatingVersion、初始化回调第一个参数、AdvancedResolveObject 形参
//   GameData  → Header(三个计数) / Strings(字符串表) / ObjectData[i] / ContainerData[i]
Debug.Print("LoadData 是薄边界：它一薄，LoadContext 才能完全不持有驱动", 0);
```

## 依赖关系

- 生产者：`ISaveDriver.Load` 的实现者（见 [ISaveDriver](../ISaveDriver)），[SaveManager](../SaveManager) 转交
- 消费者：[LoadContext](../LoadContext)（`Load` 形参、`CreateLoadData` 静态方法）、[LoadCallbackInitializator](../LoadCallbackInitializator)（存下只为取 `MetaData` 与二次读字节）
- 两个载荷：[MetaData](../MetaData)（`GetApplicationVersion` 定运行版本）与 [GameData](../GameData)（四段字节 + `TotalSize`）
- 字节如何变成 GameData：`GameData.CreateFrom(byte[])`，与 `GetData()` 配对（**不是** `GameData.Write`/`Read`）
- 驱动实现：[FileDriver](../FileDriver)、[InMemDriver](../InMemDriver)、[AsyncFileSaveDriver](../AsyncFileSaveDriver)
- 保存侧对偶：[GameData](../GameData) 由 [SaveContext](../SaveContext) 的 `Save` 产出、`SaveOutput` 包装结果
- 体系全貌：../../../architecture/save-system
---
title: "SaveAttributes"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `存档属?`
- [← 本领域 / 返回 save-system](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# 存档属?

**命名空间:** TaleWorlds.SaveSystem  
**模块:** TaleWorlds.SaveSystem

用于?Bannerlord 的存档系统中将类、属性和字段标记为可存档?.NET 属性?

## 概述

存档系统使用 .NET 属性来标识哪些类型和成员应该被序列化。三个主要属性控制保存的内容：`SaveableRootClassAttribute

` 标记存档图的根节点，?

`SaveableFieldAttribute

` ?

`SaveablePropertyAttribute

` 标记各个成员?

## 心智模型

先把 `存档属?` 当作这个子系统的入口或数据节点来理解：先看属性代表什么状态，再看方法允许你做什么。

## SaveableRootClassAttribute

将类标记为根存档类型。只有具有此属性的类才能作为存档操作的目标?

**命名空间:** TaleWorlds.SaveSystem  
**属性用?** 

`AttributeTargets.Class

`

### 属?

\| 名称 \| 类型 \| 描述 \|
\|------\|------\|-------------\|
\| SaveId \| int \| 此存档类型的唯一标识?\|

### 构造函?

`

`

`csharp
public SaveableRootClassAttribute(int saveId)
`

`

`

**参数:**
- 

`saveId

` - 此类的唯一存档 ID

### 使用示例

`

`

`csharp
[SaveableRootClass(5000)]
public class MyCampaignData
{
    private int _gold;
    private string _playerName;
    
    [SaveableField(1)]
    private int Gold
    {
        get { return _gold; }
        set { _gold = value; }
    }
    
    [SaveableProperty(2)]
    public string PlayerName
    {
        get { return _playerName; }
        set { _playerName = value; }
    }
}
`

`

`

## SaveableFieldAttribute

标记要包含在存档数据中的字段?

**命名空间:** TaleWorlds.SaveSystem  
**属性用?** 

`AttributeTargets.Field

`

### 属?

\| 名称 \| 类型 \| 描述 \|
\|------\|------\|-------------\|
\| LocalSaveId \| short \| 该字段在其父类中的本地标识符 \|

### 构造函?

`

`

`csharp
public SaveableFieldAttribute(short localSaveId)
`

`

`

**参数:**
- 

`localSaveId

` - 该字段的本地存档 ID

### 使用示例

`

`

`csharp
[SaveableRootClass(5001)]
public class MyCharacterData
{
    [SaveableField(1)]
    private int _health;
    
    [SaveableField(2)]
    private float _stamina;
    
    [SaveableField(3)]
    private List&lt;string&gt; _inventory;
}
`

`

`

## SaveablePropertyAttribute

标记要包含在存档数据中的属性?

**命名空间:** TaleWorlds.SaveSystem  
**属性用?** 

`AttributeTargets.Property

`

### 属?

\| 名称 \| 类型 \| 描述 \|
\|------\|------\|-------------\|
\| LocalSaveId \| short \| 该属性在其父类中的本地标识符 \|

### 构造函?

`

`

`csharp
public SaveablePropertyAttribute(short localSaveId)
`

`

`

**参数:**
- 

`localSaveId

` - 该属性的本地存档 ID

### 使用示例

`

`

`csharp
[SaveableRootClass(5002)]
public class MyGameModeData
{
    private int _score;
    private DateTime _startTime;
    
    [SaveableProperty(1)]
    public int Score
    {
        get { return _score; }
        set { _score = value; }
    }
    
    [SaveableProperty(2)]
    public DateTime StartTime
    {
        get { return _startTime; }
        set { _startTime = value; }
    }
}
`

`

`

## 关键规则

1. **根类必须被标?* - 只有具有 

`SaveableRootClassAttribute

` 的类才能作为根对象保?
2. **本地 ID 必须在类内唯一** - 每个可存档类中的字段或属性应该具有唯一?

`LocalSaveId

`
3. **嵌套可存档对?* - 如果字段/属性类型本身是 

`SaveableRootClass

`，它将被递归保存
4. **集合受支?* - 如果正确注册，`List&lt;T&gt;

`、`Dictionary&lt;TKey, TValue&gt;

`、`Array

` 等类型会被自动处?

## ID 分配指南

\| 范围 \| 用?\|
\|-------\|---------\|
\| 1-9999 \| 保留供游戏使?\|
\| 5000-5999 \| 常用于自定义模组可存档类?\|
\| 10000+ \| 可供模组使用 \|

## 参见

- [SaveManager](./SaveManager)
- [SaveContext](./SaveContext)
- [LoadContext](./LoadContext)

---
title: 存档系统 / Save System
description: v1.3.0 存档实现 / v1.3.0 save implementation
---

# 存档系统 / Save System

**v1.3.0 版本**

## 概述 / Overview

v1.3.0 使用 `IDataStore` 接口进行存档，没有独立的 TaleWorlds.SaveSystem 模块。

v1.3.0 uses `IDataStore` interface for saving, without a separate TaleWorlds.SaveSystem module.

## IDataStore 用法

### 基本结构

```csharp
public class MyCampaignBehavior : CampaignBehaviorBase
{
    private int _myValue = 0;
    
    public override void SyncData(IDataStore dataStore)
    {
        // 同步数据
        dataStore.SyncData("MyValue", ref _myValue);
    }
}
```

### 支持的类型

| 类型 | 支持 |
|------|------|
| int, float, string, bool | ✓ |
| 数组 | ✓ |
| List | ✓ |
| Dictionary | ✓ |
| 自定义类 | 需手动实现 |

### 示例

```csharp
public class MyData
{
    public int Score;
    public string PlayerName;
    public List<Item> Items;
}

public class MyBehavior : CampaignBehaviorBase
{
    private MyData _data = new MyData();
    
    public override void SyncData(IDataStore dataStore)
    {
        // 同步简单数据
        dataStore.SyncData("Score", ref _data.Score);
        dataStore.SyncData("PlayerName", ref _data.PlayerName);
        
        // 同步列表
        if (dataStore.IsLoading)
        {
            _data.Items = new List<Item>();
        }
        dataStore.SyncData("Items", ref _data.Items);
    }
}
```

## 与 v1.3.15 的差异

| 特性 | v1.3.0 | v1.3.15 |
|------|--------|---------|
| 存档接口 | IDataStore | TaleWorlds.SaveSystem |
| 属性标记 | 无 | [SaveableClass] |
| 类型安全 | 手动 | 自动 |
| 容器支持 | 基本 | 完整 |

---

## 相关文档 / Related Documentation

- [v1.3.15 存档系统](../../v1.3.15/zh/guide/save-system-guide.md)

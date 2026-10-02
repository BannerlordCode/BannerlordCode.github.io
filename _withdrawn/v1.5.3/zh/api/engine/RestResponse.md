---
title: "RestResponse"
description: "RestResponse 的自动生成类参考。"
---
# RestResponse

**Namespace:** TaleWorlds.Diamond.Rest
**Module:** TaleWorlds.Diamond
**Type:** `public sealed class RestResponse : RestData `
**Base:** RestData
**Source:** TaleWorlds.Diamond/Rest/RestResponse.cs

## 概述

`RestResponse` 的自动生成类参考页面。声明来自 `TaleWorlds.Diamond/Rest/RestResponse.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### SetSuccessful
`public void SetSuccessful(bool successful,string successfulReason) `

### Create
`public static RestResponse Create(bool successful,string successfulReason) `

### CreateFailure
`public static RestResponse CreateFailure(string reason,string errorDetail = null) `

### TryDequeueMessage
`public RestResponseMessage TryDequeueMessage() `

### ClearMessageQueue
`public void ClearMessageQueue() `

### EnqueueMessage
`public void EnqueueMessage(RestResponseMessage message) `

## 参见

- [本区域目录](../)
- [API 参考](../../)

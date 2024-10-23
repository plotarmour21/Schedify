import React from "react";
import { UserButton } from "@clerk/nextjs";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FaCalendarAlt, FaPlus, FaClock } from "react-icons/fa";

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-4 sm:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-white">Events</h1>
          <UserButton afterSignOutUrl="/" />
        </div>
        <Tabs defaultValue="upcoming" className="space-y-4">
          <TabsList className="w-full sm:w-auto">
            <TabsTrigger value="upcoming" className="flex-1 sm:flex-none">Upcoming Events</TabsTrigger>
            <TabsTrigger value="calendar" className="flex-1 sm:flex-none">Calendar View</TabsTrigger>
          </TabsList>
          <TabsContent value="upcoming">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-lg sm:text-xl">
                  <FaCalendarAlt className="mr-2" />
                  Your Upcoming Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">
                  You have no upcoming events.
                </p>
                <Button className="flex items-center text-sm sm:text-base">
                  <FaPlus className="mr-2" />
                  Create New Event
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="calendar">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-lg sm:text-xl">
                  <FaClock className="mr-2" />
                  Calendar View
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Calendar className="rounded-md border w-full sm:w-auto" />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
